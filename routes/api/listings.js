const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const aws = require("aws-sdk");
const multerS3 = require("multer-s3");
const multer = require("multer");
const path = require("path");
const url = require("url");
const keys = require('../../config/keys')

const Listing = require("../../models/Listing");
const User = require("../../models/User");
const validateListingInput = require("../../validation/listings");

const s3 = new aws.S3({
  accessKeyId: keys.accessKeyId,
  secretAccessKey: keys.secretAccessKey,
  Bucket: "sundaymarketbucket",
});


  const imgUpload = multer({
    storage: multerS3({
      s3: s3,
      bucket: "sundaymarketbucket",
      acl: "public-read",
      key: function (req, file, cb) {
        cb(
          null,
          path.basename(file.originalname, path.extname(file.originalname)) +
            "-" +
            Date.now() +
            path.extname(file.originalname)
        );
      },
    }),
    limits: { fileSize: 3000000 }, // In bytes: 3000000 bytes = 3 MB
    fileFilter: function (req, file, cb) {
      checkFileType(file, cb);
    },
  }).single("listingImage");

  function checkFileType(file, cb) {
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb("Error: Images Only!");
    }
  }


//listings index route
router.get("/", (req, res) => {
  Listing.find()
    .sort({ date: -1 })
    .then((listings) => res.json(listings))
    .catch((err) => res.status(404).json({ notlistingsfound: "No listings found" }));
});


//listings index per user route
router.get("/user/:user_id", (req, res) => {
  Listing.find({ user: req.params.user_id })
    .sort({ date: -1 })
    .then((listings) => res.json(listings))
    .catch((err) =>
      res
        .status(404)
        .json({ notlistingsfound: "No listings found from that user" })
    );
});

//listing show route
router.get("/:id", (req, res) => {
  Listing.findById(req.params.id)
    .then((listing) => {
      user = User.findById(listing.user).then((user) =>
        res.json({ listing: listing, user: user })
      );
    })
    .catch((err) =>
      res.status(404).json({ nolistingfound: "No listing found with that ID" })
    );
});

//listing delete route

router.delete("/:id", (req, res) => {
  Listing.findByIdAndDelete(req.params.id)
    .then((listing) => res.json(listing))
    .catch((err) => res.json(err));
});


//listing update route
router.patch("/:id", (req, res) => {
  Listing.findByIdAndUpdate(req.params.id, { $set: req.body }, {new: true}, function (
    err,
    result
  ) {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

// create listing route
// router.post(
//   "/",
//   passport.authenticate("jwt", { session: false }),
//   (req, res) => {
//     console.log(req);
//     const { errors, isValid } = validateListingInput(req.body);

//     if (!isValid) {
//       return res.status(400).json(errors);
//     }

//     const newListing = new Listing({
//       user: req.user.id,
//       title: req.body.title,
//       description: req.body.description, 
//       price: req.body.price
//     });

//     newListing.save().then((listing) => res.json(listing));
//   }
// );





router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {

    const { errors, isValid } = validateListingInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    imgUpload(req, res, (error) => {
      console.log("requestOkokok", req.file);
      console.log("error", error);
      if (error) {
        console.log("errors", error);
        res.json({ error: error });
      } else {
        // If File not found
        if (req.file === undefined) {
          console.log("Error: No File Selected!");
          res.json("Error: No File Selected");
        } else {
          debugger;
          // If Success
          const imageName = req.file.key;
          const imageLocation = req.file.location;

          // Save the file name into database into profile model


          const newListing = new Listing({
            user: req.user.id,
            photoUrl: imageLocation,
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
          });

          newListing.save().then((listing) => res.json(listing));
        }
      }
    });
  }
);

// router.post("/:id/listing-img-upload", (req, res) => {
//   imgUpload(req, res, (error) => {
//     console.log("requestOkokok", req.file);
//     console.log("error", error);
//     if (error) {
//       console.log("errors", error);
//       res.json({ error: error });
//     } else {
//       // If File not found
//       if (req.file === undefined) {
//         console.log("Error: No File Selected!");
//         res.json("Error: No File Selected");
//       } else {
//         debugger;
//         // If Success
//         const imageName = req.file.key;
//         const imageLocation = req.file.location;

//         // Save the file name into database into profile model
//         res.json({
//           image: imageName,
//           location: imageLocation,
//           title: req.body.title,
//         });
//       }
//     }
//   });
// });


router.get("/test", (req, res) => res.json({ msg: "This is the listings route" }));

module.exports = router;

const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const path = require("path");
const url = require("url");

const Comment = require("../../models/Comment")
const Listing = require("../../models/Listing");
const User = require("../../models/User");
const validateCommentInput = require("../../validation/comments");



//comments index route
router.get("/", (req, res) => {
  Comment.find()
    .sort({ date: -1 })
    .then((comments) => res.json(comments))
    .catch((err) =>
      res.status(404).json({ notcommentsfound: "No comments found" })
    );
});

//comments per listing route
router.get("/listing/:listing_id", (req, res) => {
  Comment.find({ listing: req.params.listing_id })
    .then((comments) => res.json(comments))
    .catch((err) =>
      res
        .status(404)
        .json({ notcommentsfound: "No comments found for that listing" })
    );
});


//comment delete route

router.delete("/:id", (req, res) => {
  Comment.findByIdAndDelete(req.params.id)
    .then((comment) => res.json(comment))
    .catch((err) => res.json(err));
});

//comment update route

router.patch("/:id", (req, res) => {
  Comment.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true },
    function (err, result) {
      if (err) {
        res.json(err);
      } else {
        res.json(result);
      }
    }
  );
});


//comment create route 

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // const { errors, isValid } = validateCommentInput(req.body);
    
    // if (!isValid) {
    //   return res.status(400).json(errors);
    // }

    const newComment = new Comment({
    user: req.user.id,
    listing: req.body.listingId,
    content: req.body.content,
    });

    newComment.save().then((comment) => res.json(comment), err => res.json(err));
}
     
);




module.exports = router;

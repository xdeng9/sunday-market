const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Listing = require("../../models/Listing");
const validateListingInput = require("../../validation/listings");

router.get("/", (req, res) => {
  Listing.find()
    .sort({ date: -1 })
    .then((listings) => res.json(listings))
    .catch((err) => res.status(404).json({ notlistingsfound: "No listings found" }));
});

router.get("/user/:user_id", (req, res) => {
  Listing.find({ user: req.params.user_id })
    .then((listings) => res.json(listings))
    .catch((err) =>
      res.status(404).json({ notlistingsfound: "No listings found from that user" })
    );
});

router.get("/:id", (req, res) => {
  Listing.findById(req.params.id)
    .then((listing) => res.json(listing))
    .catch((err) =>
      res.status(404).json({ nolistingfound: "No listing found with that ID" })
    );
});

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateListingtInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newListing = new Listing({
      user: req.user.id,
      title: req.body.title,
      description: req.body.description, 
      price: req.body.price
    });

    newListing.save().then((listing) => res.json(listing));
  }
);

router.get("/test", (req, res) => res.json({ msg: "This is the listings route" }));

module.exports = router;

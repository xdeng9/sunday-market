const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateListingInput(data) {
  let errors = {};

  console.log('HEREEEE')
  console.log(data)

  data.text = validText(data.title) ? data.title : "";
  data.text = validText(data.description) ? data.description : "";

  // if (!Validator.isLength(data.title, { min: 3, max: 30 })) {
  //   errors.text = "Title must be between 3 and 30 characters";
  // }

  // if (Validator.isEmpty(data.title)) {
  //   errors.text = "Title field is required";
  // }

  // if (!Validator.isLength(data.description, { min: 5, max: 140 })) {
  //   errors.text = "Description must be between 4 and 140 characters";
  // }

  // if (Validator.isEmpty(data.description)) {
  //   errors.text = "Description field is required";
  // }

  // if (Validator.isEmpty(data.price)) {
  //   errors.text = "Price is required";
  // }

  
  

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};

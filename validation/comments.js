const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateCommentInput(data) {
  let errors = {};

  data.text = validText(data.content) ? data.content : "";

  if (!Validator.isLength(data.content, { min: 5, max: 100 })) {
    errors.text = "Content must be between 5 and 100 characters";
  }

  if (Validator.isEmpty(data.content)) {
    errors.text = "Content field is required";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};

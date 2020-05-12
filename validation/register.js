const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.email = validText(data.email) ? data.email : "";
  data.password = validText(data.password) ? data.password : "";
  data.phoneNumber = validText(data.phoneNumber) ? data.phoneNumber : "";
  data.firstName = validText(data.firstName) ? data.firstName : "";
  data.lastName = validText(data.lastName) ? data.lastName : "";


  
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }
  
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }
  
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  if (!Validator.isMobilePhone(data.phoneNumber, 'en-US')) {
    errors.phoneNumber = "Phone number is not valid";
  }

  if (Validator.isEmpty(data.phoneNumber)) {
    errors.phoneNumber = "Phone number field is required";
  }

  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = "First name field is required";
  }

  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = "Last name field is required";
  }

  if (!Validator.isPostalCode(data.zipCode, 'US')) {
    errors.zipCode = "Zip code is not valid";
  }

  if (Validator.isEmpty(data.zipCode)) {
    errors.zipCode = "Zip Code field is required";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};

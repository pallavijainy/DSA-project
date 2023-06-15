const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  legal_name: String,
  date_of_birth: String,
  address: String,
  pincode: String,
  city: String,
  country: String,
  state: String,
  gst_number: String,
  mobile_number: String,
  email: String,
  company_name: String,
  date_of_incorporation: String,
  business_address: String,
  business_pincode: String,
  business_city: String,
  business_country: String,
  business_state: String,
  business_type: String,
  business_description: String
});

const UserModel = mongoose.model("profile", UserSchema);

module.exports = { UserModel };

// Import Schema and Model
const { Schema, model } = require("../db/connection.js");

// The Itenarary Schema
const Travelplan = new Schema({
    tripDate: Date, 
    subHeading: String,
    Notes: String, 
    address: String
});

// The User Schema
const UserSchema = new Schema(
    {
        username: { type: String, unique: true, required: true },
        password: { type: String, required: true },
        itenarary: [Travelplan],
    }, 
    { timestamps: true }
)

// The User Model
const User = model("User", UserSchema);

// Export the User Model
module.exports = User;
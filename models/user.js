// Import Schema and Model
const { Schema, model } = require("../db/connection.js");

// The Itenarary Schema
const Travelplan = new Schema({
    location: String,
    tripDate: String, 
    subHeading: String,
    notes: String, 
    address: String
});

// The User Schema
const UserSchema = new Schema(
    {
        username: { type: String, unique: true, required: true },
        password: { type: String, required: true },
        travelplans: [Travelplan],
    }, 
    { timestamps: true }
)

// The User Model
const User = model("User", UserSchema);

// Export the User Model
module.exports = User;
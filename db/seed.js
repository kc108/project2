//Import The Database Connection
const mongoose = require("./connection");

///////////////////////////////////////////
// IMPORT YOUR MODELS BELOW
///////////////////////////////////////////
const User = require("../models/User");

///////////////////////////////////////////
// DO YOUR DATABASE OPERATIONS IN BELOW FUNCTION
///////////////////////////////////////////

const seed = async () => {
  // Drop the Database before seeding
  mongoose.connection.db.dropDatabase();

  //*********Code Goes Here
  console.log("seed");
  const user = await User.create({
    username: "Koda",
    password: "$2a$10$13t59LPb1jKySqBZdOvdVOfzMaegXrFmC8tpG0jyDbZqx1ZgH6XLq",
  });

  //***************************** */

  mongoose.disconnect();
};

// Wait for the DB Connection to be Established
mongoose.connection.on("open", () => {
  // Run Seed Function
  seed();
});

const User = require('../models/user');

// INDEX
const index = async (req, res) => {
    console.log(req.user);   
    // Render template passing it list of travelplans
    res.render("user/index", {
        travelplans: req.user.travelplans,
    });
};

// NEW
const newTravelplans = async (req, res) => {
    res.render("user/new", { location: 'Add Destination' });
};

// CREATE



module.exports = {
    index,
    new: newTravelplans
    // create
};
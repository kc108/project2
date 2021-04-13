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

// DELETE

// UPDATE
const update = async (req, res) => {
    const user = req.user;
    // console.log(user)
    // find the travelplan that matches the id
    const travelplan = user.travelplans.find(travelplan => (travelplan._id.toString() === req.params.id))
    console.log(travelplan)
    // modify the image
    Object.assign(travelplan, req.body)
    //save the user
    await user.save()
    // redirect to /images
    res.redirect("/user/index");
};


// CREATE
const create = async (req, res) => {
        const user = req.user;
        // push a new plant and save
        user.travelplans.push(req.body);
        await user.save();
        const travelplan = user.travelplans[user.travelplans.length - 1];
        // redirect back to images index
        res.redirect("/user/index");
      };

// EDIT
const edit = async (req, res) => {
    // user
    const user = req.user;
    // find the travelplan that matches the id
    const travelplan = user.travelplans.find(travelplan => (travelplan._id.toString() === req.params.id))
    console.log(travelplan);
    // render the edit page
    res.render("user/edit", { travelplan })
};


// SHOW


module.exports = {
    index,
    new: newTravelplans,
    // destroy: deleteTravelplan, 
    update, 
    create,
    edit    
};
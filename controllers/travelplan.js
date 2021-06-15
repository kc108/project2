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
const destroy = async (req, res) => {
    const user = req.user;
    // find the image that matches the id
    const index = user.travelplans.findIndex(travelplan => (travelplan._id.toString() === req.params.id))
    console.log(index)
    // use array splice function to delete index
    user.travelplans.splice(index, 1)
    //save the user
    await user.save()
    // redirect to /images
    res.redirect("/user/index")
};


// UPDATE
const update = async (req, res) => {
    const user = req.user;
    // console.log(user)
    // find the travelplan that matches the id
    const travelplan = user.travelplans.findIndex(travelplan => (travelplan._id.toString() === req.params.id))
    console.log(travelplan)
    // modify the travelplan
    user.travelplans[travelplan].location = req.body.location
    // user.travelplans[travelplan].tripDate = req.body.tripDate
    console.log(req.user)
    //save the user
    await user.save()
    // redirect to /user
    res.redirect("/user/index");
};


// CREATE
const create = async (req, res) => {
        const user = req.user;
        // push a new plant and save
        console.log(req.body)
        user.travelplans.push(req.body);
        await user.save();
        const travelplan = user.travelplans[user.travelplans.length - 1];
        // redirect back 
        res.redirect(`/user/${travelplan._id}`);
        //res.redirect("/user/index");
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
const show = async (req, res) => {
  // user
  const user = req.user;
  // find the travelplan that matches the id
  const travelplan = user.travelplans.find(travelplan => (travelplan._id.toString() === req.params.id))
  console.log(travelplan);
  // render the edit page
  res.render("user/show", { travelplan })
};


module.exports = {
    index,
    new: newTravelplans,
    destroy, 
    update, 
    create,
    edit, 
    show  
};
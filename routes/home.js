///////////////////////////////
// Import Router
////////////////////////////////
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const User = require("../models/user");


///////////////////////////////
// Router Specific Middleware
////////////////////////////////

///////////////////////////////
// Router Routes
////////////////////////////////
router.get("/", (req, res) => {
    res.render("home")
});

///////////////////////////////
// AUTH RELATED ROUTES
////////////////////////////////

// SIGNUP ROUTE
router.get("/auth/signup", (req, res) => {
    res.render("auth/signup");
});

router.post("/auth/signup", async(req, res) => {
    try {
        // generate salt for hashing
        const salt = await bcrypt.genSalt(10);
        // hash the password
        req.body.password = await bcrypt.hash(req.body.password, salt);
        // Create the User
        await User.create(req.body);
        // Redirect to login page
        res.redirect("/auth/login");
    } catch (error) {
        res.json(error)
    };
});

// LOGIN ROUTES
router.get("/auth/login", (req, res) => {
    res.render("auth/login");
});

router.post("/auth/login", async(req, res) => {
    try {
        // Check if the user exists (make sure to use findOne not find)
        const user = await User.findOne({ username: req.body.username });
        if (user) {
            // Check if password matches
            const result = await bcrypt.compare(req.body.password, user.password);
            if (result) {
                // Create user session property
                req.session.userId = user._id;
                // Redirect to /itenarary
                res.redirect("/travelplans")
            } else {
                // Send error is password does not match
                res.json({ error: " Passwords do not match "});
                }
            } else {
                // Send error if user doesn't exist
                res.json({ error: "User does not exist "});
            }
        } catch (error) {
            res.json(error)
    }
});

// LOGOUT ROUTE
router.get("/auth/logout", (req, res) => {
    res.send("logout");
});


///////////////////////////////
// Export Router
////////////////////////////////
module.exports = router
///////////////////////////////
// Import Router
////////////////////////////////
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const User = require("../models/user");

const travelplansCtrl = require('../controllers/travelplan');

///////////////////////////////
// Custom Middleware Functions
////////////////////////////////
const addUserToRequest = async (req, res, next) => {
    if (req.session.userId) {
        req.user = await User.findById(req.session.userId);
        next()
    } else {
        next()
    };
};

// Auth Middleware Function to check if user authorized for route
const isAuthorized = (req, res, next) => {
    // Check if user session property exists, if not redirect back to login page
    if (req.user) {
        // If user exists, wave them by to go to route handler
        next()
    } else {
        // Redirect the not logged in user
        res.redirect("/auth/login")
    };
};

///////////////////////////////
// Router Specific Middleware
////////////////////////////////
router.use(addUserToRequest);

///////////////////////////////
// Router Routes
////////////////////////////////
router.get("/", (req, res) => {
    res.render("home")
});


///////////////////////////////
// User Routes
////////////////////////////////
// INDEX
router.get("/user/index", isAuthorized, travelplansCtrl.index);

// NEW
router.get("/user/new", isAuthorized, travelplansCtrl.new);


// DELETE

// UPDATE
// router.put("/user/:id", isAuthorized, travelplansCtrl.update);

// CREATE
router.post("/user/new", isAuthorized, travelplansCtrl.create);

// EDIT
router.get("/user/:id/edit", isAuthorized, travelplansCtrl.edit);

// SHOW
// router.post("/user/new", travelplansCtrl.show);



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
                res.redirect("/user/index")
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
    // Remove the userId property from the session
    req.session.userId = null;
    // Redirect back to the main page
    res.redirect("/");
});


///////////////////////////////
// Export Router
////////////////////////////////
module.exports = router;
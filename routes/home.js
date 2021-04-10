///////////////////////////////
// Import Router
////////////////////////////////
const router = require("express").Router()

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
    res.send("signup get");
});

router.post("/auth/signup", (req, res) => {
    res.send("signup post");
});

// LOGIN ROUTES
router.get("/auth/login", (req, res) => {
    res.send("login get");
});

router.post("/auth/login", (req, res) => {
    res.send("login post");
});

// LOGOUT ROUTE
router.get("/auth/logout", (req, res) => {
    res.send("logout");
});


///////////////////////////////
// Export Router
////////////////////////////////
module.exports = router
# Project Name
Travel-Vacation-Planner

- **Author:** Kim Carpico
- **Link to Live Site:** https://vacation-travel-planner.herokuapp.com/


## Project Summary



## Technology Used
HTML
CSS
JavaScript
Node.js
Bcrypt


## Models
Models Used
User Model:
 - username => { type: String, unique: true, required: true }, 
 - password => { type: String, required: true },
 - itenarary => `[Travelplan]`

 Travelplan Model:
 - tripDate => Date, 
 - subHeading => String, 
 - notes => String,
 - address => String


## Route Map

| Method | Endpoint | Resource/View |
|--------|----------|---------------|
INDEX
|GET| "/user" | List all Travelplans (user/index.ejs) |

SHOW
|GET| "/user/:id | Display single travelplan (user/show.ejs)|

NEW 
|GET| "/user/new | Render form for New travelplan (user/new.ejs)|

CREATE 
|POST| "/user" | Uses Form Submission to Create new travelplan(s) |

EDIT
|GET| "/user/:id/edit" | Render form to edit travelplan (user/edit.ejs)|

UPDATE
|PUT| "/sample/:id" | Uses Form Submission to edit Sample |
|PUT| "/user/:id" | Uses Form Submission to edit travelplan(s) |

DESTROY
|DELETE| "/user/:id" | Delete a particular travelplan |


## Challenges
- Found styling with Bulma to be a bit clunky and difficult to get things 'exactly' how I intended them to be displayed
- 

## Existing Bugs
None that I am aware of.
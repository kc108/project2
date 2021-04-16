# Project Name
Travel-Vacation-Planner

- **Author:** Kim Carpico
- **Link to Live Site:** https://vacation-travel-planner.herokuapp.com/


## Project Summary
A travelplanning app to help one plan there itenarary for trips. A user enters their destination and other details, including notes about the event. Once submit is entered they will be able to see details about all upcoming trips planned for in one location. A user has the ability to return to the itenarary and see a list of all the trips in one spot on the user/index page. 

## Future Features
- Ability to select a date range from a calendar and make multiple days
- Ability to take photos from one's mobile device and upload them to the event planned to keep a journal that can be shared with friends


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
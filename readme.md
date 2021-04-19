# Project Name
Travel-Vacation-Planner

- **Author:** Kim Carpico
- **Link to Live Site:** https://vacation-travel-planner.herokuapp.com/


## Project Summary
A travelplanning app to help one plan detailed itenararies for your future vacation. 

A user enters their destination, including notes, locations and subheadings/category of event. Once submit is entered they will be able to see details about all upcoming trips planned for in one location either as a detailed view of a specific day or as a less detailed view that displays all of the days and locations on the user/index page.


## Future Features
- Ability to select a date range from a calendar and make multiple days
- Ability to take photos from one's mobile device and upload them to the event planned to keep a journal that can be shared with friends


## Technology Used
HTML
CSS
JavaScript
Node.js
Bcrypt
MongoDB
Express
Mongoose


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
- Found styling with Bulma to be a bit clunky and difficult to get things 'exactly' how I intended them to be displayed. 
- Learned that I should design for mobile first, then desktop
- Found it challenging to style for multiple mobile devices and platforms (e.g. Safari, Chrome, iPad, iPhone)


## Existing Bugs
- User/Index page should not have space between left and right columns
- TBD
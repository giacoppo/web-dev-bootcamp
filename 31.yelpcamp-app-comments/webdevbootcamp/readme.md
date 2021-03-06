#YelpCamp

* Add Landing Page
* Add Campgrounds Page that lists all campgrounds

Each Campground has:
* Name
* Image


#Layout and Basic Styling
* Create our header and footer partials
* Add in Bootstrap


#Creating New Campgrounds
* Setup new campground POST route
* Add in body-parser
* Setup route to show form
* Add basic unstyled form


#Style the campgrounds page
* Add a better header/title
* Make campgrounds display in a grid


#Style the Navbar and Form
* Add a navbar to all templates
* Style the new campground form


#Databases

##Intro to Databases
* What is a database
    * A collection of information/data
    * Has an interface
* SQL(relational) vs NoSQL(non-relational)


#Intro to MongoDB
* What is MongoDB?
* Why are we using it?
* Let's Install it!


#Mongoose
* What is Mongoose?
* Why are we using it?
* Interact with a Mongo Database using Mongoose


#Add Mongoose to YelpCamp
* Install and configure mongoose
* Setup campground model
* Use campground model inside of our routes!


#Show Page
* Review the RESTful routes we've seen so far
* Add description to our campground model
* Show db.collection.drop()
* Add a show route/template

RESTFUL ROUTES

name    url         verb    desc.
=================================================
INDEX   /dogs       GET     Display a list of all dogs
NEW     /dogs/new   GET     Displays form to make a new dog
CREATE  /dogs       POST    Add new dog to DB
SHOW    /dogs/:id   GET     Shows info about one dog

#Refactor Mongoose Code
* Create a models directory
* Use module.exports
* Require everything correctly!

#Add Seeds File
* Add a seeds.js file
* Run the seeds file every time the server starts

#Add the Comment model
* Make our errors go away
* Display comments on campground show page

#Comment New/Create
* Discuss nested routes
* Add the comment new and create routes
* Add the new comment form

INDEX   /campground         GET
NEW     /campgrounds/new    GET
CREATE  /campgrounds        POST
SHOW    /campgrounds/:id    GET

ADD COMMENTS ASSOCIATED WITH A CAMPGROUND:
NEW     /campgrounds/:id/comments/new   GET
CREATE  /campgrounds/:id/comments       POST

##Style Show Page
* Add sidebar to show page
* Display comments nicely


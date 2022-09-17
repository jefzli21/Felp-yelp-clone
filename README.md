# README

To locally run this app, run rails db:setup && rails s at root directory and npm start in frontend folder.

## About 
Felp is an app that is inspired by Yelp, but instead of showing every business, Felp only focus on restaurants. 
Hence the name: Felp(food help).

## Link to Live Site
https://felp-e.herokuapp.com/

## Technologies
* Ruby on Rails
* Node.js
* React.js
* Redux.js
* Google Map API

## Features
* User authentication - Login, Logout, and Signup functions
* User show page - shows the info of the user and the reviews they have made to each business
* Business show page - show info regards to the business, including a map with it's location, hours, phone, website, and all reviews.
* Business create page - page to write or edit a review on the business site, allows for file upload.
* Business search page - using backend query, search page can fetch businesses that fits the query condition


### Difficulties
* Storing and uploading photos to AWS, very easy to break or fetch the wrong address, fixed all routes by tracing every single routes carefully
* Extracting associated variables on the frontend using jbuilder. For example, I could pass in the attributes of a review writer through its review.
* CSS, created backgrounds with animations, very difficult to adjust positions, spent long time to fix it.

### WORK FLOW
* Generated models and migrated database with appropriate attributes
* Setup both database level and model level validations
* Formulate associations to reviews, users, and photos
* Generate controllers with show and create, wrap parameters and passed to frontend through jbuilder views
* Built business store using redux, dispatching actions to fetch business(es) from backend and modify business data through reducer function based on       action types
* Built business component, used selectors to select user, reviews and business data. 
* Fetched business data through useEffect
* Rendered business page with edit or create review buttons and various attributes plus all reviews mapped out 
* Matched routes in App.js on top level source folder



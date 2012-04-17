# Passport Photo Middleware

## Installation

    npm install passport-photo-middleware

## Usage

```javascript

//1) create express server or connect server called app

//2) include authentication middleware to set user as req.user

//3) set up the passport-photo library

var photo = require("passport-photo");
photo.use(require("passport-photo-gravatar")());

//4) include the middleware

app.use(require('passport-photo-middleware')(photo));

//5) rest of application
```
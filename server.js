// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();

/* Middleware*/
//global variable for bodyParser
const bodyParser = require('body-parser');

// Cors for cross origin allowance
const cors = require('cors');

//Configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Configuring exxpress to use cors
app.use (cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port =3000;
const server = app.listen(port,listening);

function listening() {
    console.log ("server is running");
    console.log (`running on localhost: ${port}`);
}

app.get ('/all', getData);

function getData(req,res){
res.send(projectData);
}


app.post('/add' , postData)

function postData (req, res) {

    projectData={

        temp:req.body.temp,
        date:req.body.date,
        content:req.body.content,
    }
    res.send(projectData);
    
}
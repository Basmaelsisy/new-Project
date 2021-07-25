// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express= require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
const bodyParser = require ('body-parser') 

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors =require ('cors');
app.use (cors()); 

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port =8000;
const server =app.listen(
    port , listining
)

function listining(){
    console.log(  `server Running On Localhost: ${port}`)
}

// create a callBack function and send the data to 'all' file 
//get route
app.get('/all' ,function(req,res){
res.send(projectData);
console.log(projectData);
})



// post route 

app.post('/add' , function(req,res){
    let data = req.body;

    console.log('POST Update to server ', data);

    projectData['temp'] = data.temp;
    projectData['date'] = data.date;
    projectData['feelings'] = data.feelings;

    //send project data
    res.send(projectData);
});
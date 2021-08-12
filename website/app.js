// Global Variables 
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?zip={zip}}&appid={apiKey}';
const apiKey = '&appid=83a6e2e31179bb4557bc39e3fadc90a1';

// Create a new date instance dynamically with JS
let date = new Date();
let newDate = date.getMonth()+1+'.'+ date.getDate()+'.'+ date.getFullYear();
console.log('The date is' + newDate);


const generate = document.getElementById('generate'); 
generate.addEventListener('click' , generateWheather);

function  generateWheather (e){
    const zip = document.getElementById('zip').value;
    const feeling = document.getElementById('feelings').value;
    const temp = document.getElementById('temp').value;

    retrieveWeather(baseUrl,zip,apiKey)

   .then(function(data){
        console.log(data);
          postData('http://localhost:8000/add', {temp:temp, date:date, content:feeling});
          //run userView function
      })
    .then( userView());
      }

const retrieveWeather = async(baseUrl,zip,apiKey) => {
    const response = await fetch(baseUrl+zip+apiKey);
    try{
        const data = await response.json();
        console.log(data);
        return data;
    } 
    catch(error){
        console.log("error" , error);
    }
}


const postData = async ( url = '' , data={})=>{
    console.log(data);
    const response = await fetch(url ,{
        method : 'post',
        credentials: 'same-origin',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(data)
    })
    try {
        const newData =await response.json();
        console.log(newData);
        return newData;
    }catch(error){
        console.log("error" ,error)
    }
}
const userView= async()=>{
    const request =await fetch('http://localhost:8000/all');
    try{
        const allData= await request.json();
        document.getElementById('date').innerHTML="Date: " + (allData.date);
        document.getElementById('temp').innerHTML="the temperature is: " + (allData.temp);
        document.getElementById('content').innerHTML="my feeling is: " + (allData.content);
    }catch(error){
        console.log('error',error);
    }
}
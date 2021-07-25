/* Global Variables */
const baseUrl = 'https://home.openweathermap.org/api_keys';
const apiKey = '&appid=5af851d0116100ae853b737128627cbc';

// Create a new date instance dynamically with JS
let date = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
console.log('The date is' + newDate);

// Event listener to add function to existing HTML DOM element

document.getElementById('generate').addEventListener('click' , addNew);

function  addNew (e){
    const zip = document.getElementById('zip').value;
    const feeling = document.getElementById('feelings').value;

    newItems(baseUrl , apiKey , zip);

    .then(function(data){
        console.log(data);
      // Add all data into POST request
          //The call to method `postData` should have endpoint name as `/add` -- as per mentor instruction https://knowledge.udacity.com/questions/629283
          postData('/add', {temp:data.main.temp, date:newDate, feelings:feeling});
          //run userView function
      })
       UI();
      }

// GET web ApI function 
const weather = async(baseUrl , zip , apiKey) => {
    const res = await fetch(baseUrl+zip+apiKey);
    try{
        const data = await res.json();
        console.log(data);
        return data;
    } 
    catch(error){
        console.log("error" , error);
    }
}

// postData function 
const postData = async ( url ='' , data={})=>{
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
        console.log('error' ,error)
    }
}
const UI= async()=>{
    const request =await fetch('/allWeaterData');
    try{
        const allData= await request.json();
        document.getElementById('date').innerHTML=`date: ${allData.date}`;
        document.getElementById('temp').innerHTML=`the temperature is : ${allData.temp}`;
        document.getElementById('content').innerHTML=`my feeling is : ${allData.content}`;
    }catch(error){
        console.log('error',error);
    }
}
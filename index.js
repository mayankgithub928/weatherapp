const requests = require('requests');
const express = require('express');
const app = express();

app.get('/weather',(req,res)=>{
    requests(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&units=metric&appid=16f3f0dd73db66b214508fbd7d7fe3a0`)
    .on('data',(chunk)=>{
        //console.log(chunk);  
        const jsonObj = JSON.parse(chunk);
        //console.log(jsonObj);  
       res.write(`City:${jsonObj.name}, TEMP: ${jsonObj.main.temp}`);
       console.log(jsonObj.main.temp);
    })
    .on('end',(err)=>{
        if(err){
            console.log(err);
        }
        res.end();
    }); 
    
});

app.listen(8000,()=>{
    console.log('weather server started');
});
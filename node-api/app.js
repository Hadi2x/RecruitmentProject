const express = require('express');
const app = express();

app.get('/getData',(req,res)=>
{
    res.json({
        "StatusCode":200,
    "StatusMessage": "SUCCESS"
    })
    
})

app.listen(3000,(req,res)=>{
    console.log('RUNNING');
})
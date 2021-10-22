const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send('Hello')
})

const port = process.env.PORT || 7070;

app.listen(port, ()=>{
    console.log('listening port 7070')
})
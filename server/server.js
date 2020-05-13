const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.get('/',(req,res)=>{
    res.send( `Response COMPLETE!!!!!!`);
})
app.listen(PORT, ()=>{
    console.log(`SERVER ON!!!!!!!`)
})
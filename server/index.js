const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the PIN Code ", (pin) => {
    console.log(`PIN is , ${pin}!`);
    rl.close();
});



const express = require("express");

const app = express();
const PORT = 5000;

const fetchIt = async ()=>{
     const res = await fetch('https://api.postalpincode.in/pincode/581116');
     const data = await res.json();
     console.log(data);
}

fetchIt();

app.get('/',(req,res)=>{
    return res.send("Server STarted");
})


app.listen(PORT,()=>{
    console.log("Server running the the port",PORT);
})
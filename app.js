const express = require("express");

// import path module
const path = require("path");

// making an express  app
const app = express();

// run express app on port 80
const port = 8000;



// EXPRESS SPECIFIC STUFF----------------------------->
// -----------------------STATIC FILES------------------------------------------
// for serving static  files-------------
app.use('/static', express.static('static'))

// middle ware--------------jo form se data a rha h usko express tak lane ke liye
app.use(express.urlencoded())

// PUG SPECIFIC STUFF--------------------------------->
//-------------------------TEMPLATE ENGINE PUG------------------------------------
// set the template engine as pug
app.set('view engine', 'pug')

// set the views directory
app.set('views' , path.join(__dirname,'views'))

// ENDPOINTS-----------------
app.get("/",(req, res)=>{
    const params = {}
    res.status(200).render('home.pug',params)
    res.end(home)
})

app.get("/contact",(req, res)=>{
    const params = {}
    res.status(200).render('contact.pug',params)
    res.end(contact)
})
app.get("/about" ,(req, res)=>{
    const params ={ }
    res.status(200).render('about.pug',params)
    res.end(about)
})
// app.get("/services", (req, res)=>{
//     const params = { }
//     res.status(200).render('services.pug',params)
//     res.end(services)

// })

// konse port pr listen krna chahte hai app ko
app.listen(port, ()=>{
    // using template letral ${port}
    console.log(`The application started successfully on port ${port}`);

})
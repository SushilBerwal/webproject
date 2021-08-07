const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const port = 8000;

const staticPath = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");
app.set('view engine', 'hbs');
app.set("views",template_path);
hbs.registerPartials(partials_path);

app.use(express.static(staticPath));



app.get("/",(req,res)=>{
    res.render("index.hbs");
});

app.get("/about",(req,res)=>{
    res.render("about.hbs");
});

app.get("/weather",(req,res)=>{
    res.render("weather.hbs");
});

app.get("*",(req,res)=>{
    res.render("404error",{
        errorMsg : "Opps! Page Not Found,Go Back Here..."
    });
});

app.listen(port,()=>{
console.log(`listening to the port at ${port}`);
});
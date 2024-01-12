import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
const app= express();
const port=  3002;

app.use(express.static("public"));

app.get("/",async(req,res)=>{
    try{
        const response= await axios.get("https://api.adviceslip.com/advice");
        const data= response.data;

        res.render("index.ejs", {
            data: data,
        });
    }
    catch(error){
        console.log(error.message);
        res.render("index.ejs", {
            error : "Can't load the advice",
        });
    }
})
app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})

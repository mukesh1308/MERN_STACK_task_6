import express from "express";
import path from "path";
import url from "url";
import {auth} from "./auth.mjs";

const port=800;
const app=express();
app.use(express.static(path.join(path.dirname(url.fileURLToPath(import.meta.url)),"../public")));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(auth);


app.post("/home",async(req,res)=>{
    try{
        console.log(req.body);
        res.send("valid user");
    }
    catch(err){
        res.send("error");
    }
});

app.listen(port,()=>{
    console.log(`listening to port ${port}`);
});
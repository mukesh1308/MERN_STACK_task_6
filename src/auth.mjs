import fs from "fs";
const auth=async(req,res,next)=>{
    try{
        fs.readFile("user_data.json","utf8",(err,data)=>{
            if(err){
                res.sent("internal error");
            }
            let user=JSON.parse(data);
            if(user[req.body.userId]!=undefined && user[req.body.userId]===req.body.password){
                next();
            }
            res.send("Invalid user");
        });
    }
    catch(err){
        res.send("error");
    }
}

export {auth};



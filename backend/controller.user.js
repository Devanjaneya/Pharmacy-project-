import userModel from "../model/model.user.js";
import bcrypt, { hashSync } from "bcrypt";
import jwt from "jsonwebtoken";
export function register(req,res){
    const {name,email,password}=req.body;
    userModel.findOne({email}).then((data)=>{
        if(data){
            return res.status(403).json({message:"user already exists"});
        }
        else{
            const newuser=new userModel({
                name,email,password:hashSync(password,10)
            });
            newuser.save().then(data=>{
                res.status(200).json({message:data});
            }).catch(err=>{
                res.status(500).json({message:err.message});
            });
        }
    });
}

export function login(req,res){
    const {email,password}=req.body;
    userModel.findOne({email}).then((data)=>{
        if(!data){
            return res.status(404).json({message:"user is not registered"});
        }
        let validpassword=bcrypt.compareSync(password,data.password);
        if(!validpassword){
            return res.status(403).json({message:"Invalid password"});
        }
        let token=jwt.sign({data:data._id},"secretKey",{});
       res.send({
                    message: "logged in successfully",
                    token: token,
                    name: data.name 
                });

    });
}

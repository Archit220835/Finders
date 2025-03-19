import '../model/connection.js';
import jwt from 'jsonwebtoken';
import rs from 'randomstring';
import url from 'url';
import UserSchemaModel from '../model/user.model.js';
import sendMail from './Email.controller.js';

export var save =async(req,res)=>{
        //console.log(req.body);
        var user=await UserSchemaModel.find();
        var len=user.length;
        var _id=(len==0)?1 :user[len-1]._id+1;
        var userDetails={...req.body,"_id":_id,"role":"user","status":0,"info":Date()};
        //console.log(userDetails);
        try{
            await UserSchemaModel.create(userDetails);
             sendMail(userDetails.email,userDetails.password); 
            res.status(201).json({"status":true})
          }
          catch(erorr)
          {
            res.status(500).json({"msg":"Resource not created"});
          }
}

export var login =async(req,res)=>{
        var condition_obj={...req.body,"status":1};
        //console.log(condition_obj);
        var userList=await UserSchemaModel.find(condition_obj);
        //console.log(userList);
        if(userList.length!=0)
        {
            const payload={"subject":userList[0].email}
            const key=rs.generate(); 
            const token=jwt.sign(payload,key);
            res.status(200).json({"token":token,"userList":userList[0]})
        }   
        else
        {
            res.status(500).json({"token":"token error"})
        } 
}

export var fetch=async(req,res)=>{
    var condition_obj = url.parse(req.url,true).query;
   // console.log(condition_obj);
    var userList=await UserSchemaModel.find(condition_obj);
    //console.log(userList);
    if(userList.length!=0)
    {
      res.status(200).json(userList);
    }
    else
    {
      res.status(500).json({"msg":"user detail not found"});
    }
  }

  export var update=async(req,res)=>{
       var userDetail= await UserSchemaModel.findOne(req.body.condition_obj); 
     // console.log(userDetail);
       if(userDetail)
       {
          var users=await UserSchemaModel.updateOne(req.body.condition_obj,{$set:req.body.content_obj})
          if(users)
          {
            res.status(200).json({"msg":"userDetail updated successfully"});
          }
          else
          {
            res.status(500).json({"msg":"userDetail not updated successfully"})
          }
      }
      else
      {
      res.status(404).json({"msg":"resource not found"});
      }
  }

  export var deleteUser=async(req,res)=>{
 var userDetail= await UserSchemaModel.findOne(req.body); 
   //console.log(userDetail);
    if(userDetail)
    {
       var users=await UserSchemaModel.deleteOne(req.body);
       if(users)
       {
         res.status(200).json({"msg":"userDetail deleted successfully"});
       }
       else
       {
         res.status(500).json({"msg":"userDetail not deleted successfully"})
       }
   }
    else
    {
     res.status(404).json({"msg":"resource not found"});
    }

    }


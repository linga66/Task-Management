const TodoModel=require("../models/TodoModel");
module.exports=async(req,res)=>{
    try{
        const todos=await TodoModel.find()
        res.status(200).json(todos)
    }catch(error){
        console.error("error retrieving todo",error)
        res.status(500).json({message:"Internal Server Error"})
    }
}
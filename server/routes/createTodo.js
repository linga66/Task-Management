const TodoModel=require("../models/TodoModel")
module.exports=async(req,res)=>{
    try{
        const {title,description,completed}=req.body
        const newTodo=new TodoModel({
            title,
            description,
            completed:completed || false,
        })
        const savedTodo=await newTodo.save()
        res.status(201).json(savedTodo)
    }catch(error){
        console.log("Error while creating",error)
        res.status(500).json({message:"Internal server error"})
    }
}
const TodoModel=require("../models/TodoModel");
module.exports=async(req,res)=>{
    try{
        const {id}=req.params
        const {title,description,completed}=req.body
        const updatedTodo=await TodoModel.findByIdAndUpdate(
            id,{
                title,
                description,
                completed,
            },
            {new:true}
        )
        if(!updatedTodo) return res.status(404).json({message: "The todo with the given ID was not found."})
        res.status(200).json(updatedTodo)
    }catch(error){
        console.error("")
    }
}
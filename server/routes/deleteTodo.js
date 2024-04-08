const TodoModel=require("../models/TodoModel");
module.exports=async(req,res)=>{
    try{
        const {id}=req.params
        const deleteTodo=await TodoModel.findByIdAndDelete(id);
        if(!deleteTodo) return res.status(404).json({message: "No todo with this id found"});
        res.status(200).json({message: "Todo deleted"})
    }catch(error){
        console.error("Error deleting todo",error)
        res.status(500).json({message:"Internal Server Error"})
    }
}
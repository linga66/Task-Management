const express=require('express')
require('dotenv').config()
const isLoggedIn=require('./middleware/isLoggedIn')
const User=require('./models/User')
const router=express.Router()
const SECRET=process.env.SECRET || 'secret'
const createTodoRoute=require('./routes/createTodo')
const readTodoRoute=require('./routes/readTodo')
const updateTodoRoute=require('./routes/updateTodo')
const deleteTodoRoute=require('./routes/deleteTodo')
router.use(express.json())
router.post('/login',async(req,res)=>{
    const {username,password} = req.headers;
    try{
        const user=await User.exists({username,password})
        if(!user) return res.status(401).json({message:"Invalid username or password"})
        if(user){
            const token=jwt.sign({userID:user.id},SECRET,{expiresIn:'1h'})
            res.json({message:"Logged in successfully",token,username})
        }else{
            res.status(403).json({message:"Invalid username or password"})
        }
    }catch(error){
        console.log('Error during login',error)
        return res.status(500).json({message:"Internal server error"})
    }
})
// router.post('/signup',async(req,res) => {
//     const {username, password} = req.body
//     try{
//         const user=await User.findOne({username})
//         if(user)
//     }catch(error){
//         console.log("Error",error)
//         return res.status(500).json({message:"Internal server error"})
//     }
// })
router.post('/todos',createTodoRoute)
router.get("/todos",readTodoRoute)
router.put('/todos/:id',updateTodoRoute)
router.delete('/todos/:id',deleteTodoRoute)
module.exports=router
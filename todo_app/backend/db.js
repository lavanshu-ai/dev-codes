const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://lv:aFtdfhIruBYL1bsk@myth.oxenwsw.mongodb.net/todo_app')
const schema=new mongoose.Schema({
 tittle:String,
 description:String,
 completed:Boolean
})
 const todo=mongoose.model('todos',schema);
 module.exports=todo;
const mongoose=require('mongoose');

const menuItemSchema=mongoose.Schema({
    dishname:{
        type:String,
        required:true
        
    },
    cost:{
        type:Number,
        required:true,
        min:0
    }
    
    
})

module.exports=mongoose.model('MenuItem',menuItemSchema)
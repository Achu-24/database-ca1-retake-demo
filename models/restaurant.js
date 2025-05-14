const mongoose=require('mongoose')

const restaurantSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },

    location:{
        type:String,
        required:true
    },

    menuItems:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'MenuItem'

    }]
})
module.exports=mongoose.model('Restaurant',restaurantSchema)
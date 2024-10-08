const { default: mongoose } = require("mongoose");

const PrioritySchema = new mongoose.Schema({
    priority:{
        type:Number
    },
    color:{
        type:String
    }

},{
    timestamps:true
})

const PriorityModel = mongoose.model('priority',PrioritySchema)
module.exports=PriorityModel

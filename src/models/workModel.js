const { default: mongoose, Schema } = require("mongoose");

const WorkSchema = new mongoose.Schema({
    id_user:{
        type:Schema.Types.ObjectId,
        ref:'user'
    },
    name:{
        type:String
    },
    description:{
        type:String
    },
    success:{
        type:Boolean,
        default:false
    },
    id_priority:{
        type:Schema.Types.ObjectId,
        ref:'priority'
    },
    date_work:{
        type:Date,
        default:Date.now()
    }
},{
    timestamps:true
})
const WorkModel = mongoose.model('work',WorkSchema)
module.exports=WorkModel
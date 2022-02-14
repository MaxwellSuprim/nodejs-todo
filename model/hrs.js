const mongoose = require('mongoose')
const hrSchema= new mongoose.Schema(
    {
        time:{
            type:String,
            require:false
        },
        activity:{
            type:String,
            require:true
        },
        place:{
            type:String,
            require:true
            
        }
    }
)
module.exports=mongoose.model('work table',hrSchema)//work table is the name that is used to creste in db
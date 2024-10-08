const asyncHandler = require('express-async-handler')
const PriorityModel = require('../models/priorityModel')
const errorMiddleHandle = require('../middlewares/errorMiddleWare')

const addPriority= asyncHandler(async(req,res)=>{
    try {
        const {priority,color}= req.body
        const newPriority= new PriorityModel({
            priority,color
        })
        const saveNewPriority = await newPriority.save()
        if(saveNewPriority){
            res.status(200).json({
                message:'Thêm thành công',
                data:saveNewPriority
            })
        }

    } catch (error) {
        res.status(500).json(error)
    }
})

const getPriority= asyncHandler(async(req,res)=>{
    try {
        const getPriority = await PriorityModel.find()
        getPriority.sort((a, b) => a.priority - b.priority);
        res.status(200).json({
            data:getPriority
        })
    } catch (error) {
        errorMiddleHandle(error,req,res)
    }
})

module.exports={addPriority,getPriority}
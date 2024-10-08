const asyncHandler = require("express-async-handler");
const WorkModel = require("../models/workModel");

const addWork = asyncHandler(async (req, res) => {
  const { id_user, name, description, date_work,id_priority } = req.body;
  const newWork = new WorkModel({
    id_user,
    name,
    description,
    date_work,
    id_priority
  });
  const saveNewWork = await newWork.save()
  if(saveNewWork){
    res.status(200).json({
        message: "thêm thành công",
        data: newWork
    })
  }
});

const getWorkByUserId = asyncHandler(async(req,res)=>{
    const { id_user } = req.query;
    try {
        const work = await WorkModel.find({ id_user }).populate('id_priority');
        res.status(200).json(work);
      } catch (error) {
        console.log(error);
        res.status(500).json(error);
      }
})

const updateSuccess = asyncHandler(async (req, res) => {
  const { id_work } = req.params;
  const { success} = req.body;
  const result = await WorkModel.findByIdAndUpdate(id_work, {
    success,
  });
  if (result) {
    res.status(200).json({
      message: "sửa thành công",
      data:result
    });
  }
});

const updateWork = asyncHandler(async (req, res) => {
  const {id_work} = req.params;
  const {name, description,id_priority} = req.body;
  try {
    const workExists = await WorkModel.findById(id_work);
    if (!workExists) {
      return res.status(404).json({
        message: "Work not found",
      });
    }

    const updatedWork = await WorkModel.findByIdAndUpdate(id_work,{ name, description,id_priority },{ new: true });

    res.status(200).json({
      message: "Update work success",
      work: updatedWork,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Update failed",
      error,
    });
  }
});

const deleteWork = asyncHandler(async (req, res) => {
  const { id_work } = req.params;
  try {
    const result = await WorkModel.findByIdAndDelete(id_work);
    if (result) {
      res.status(200).json({
        message: "xóa thành công",
      });
    } else {
      res.status(404).json({
        message: "Không tìm thấy công việc",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Có lỗi xảy ra",
      error,
    });
  }
});

const getSuccessWork = asyncHandler(async(req, res) => {
  const {id_user} = req.params;
  try {
    const result = await WorkModel.find({id_user:id_user,success:true})
    if(result) {
      res.status(200).json({
        data:result
      })
    }
  } catch (error) {
    console.log(error);
  }
})
const getWorkPriorityByIdUser = asyncHandler(async(req,res)=>{
  const { id_user } = req.query;
  try {
      const workPriority = await WorkModel.find({ id_user:id_user,id_priority: { $ne: null } }).populate('id_priority');
      workPriority.sort((a, b) => a.id_priority.priority - b.id_priority.priority);
      res.status(200).json({
        data:workPriority
      });
} catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
})
module.exports={addWork,getWorkByUserId, updateSuccess, updateWork, deleteWork, getSuccessWork,getWorkPriorityByIdUser}
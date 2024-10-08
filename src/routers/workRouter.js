const Router = require('express')
const { addWork, getWorkByUserId, updateSuccess, deleteWork, updateWork, getSuccessWork, getWorkPriorityByIdUser } = require('../controllers/workController')

const WorkRouter = Router()
WorkRouter.post('/add-work',addWork)
WorkRouter.get('/get-work-by-id',getWorkByUserId)
WorkRouter.put('/update-success/:id_work',updateSuccess)
WorkRouter.put('/update-work/:id_work', updateWork)
WorkRouter.delete('/delete-work/:id_work', deleteWork)
WorkRouter.get('/success-work/:id_user',  getSuccessWork)
WorkRouter.get('/get-work-priority',getWorkPriorityByIdUser)

module.exports=WorkRouter
const Router = require("express");
const { addPriority, getPriority } = require("../controllers/priorityController");

const PriorityRouter = Router();
PriorityRouter.post("/add-priority", addPriority);
PriorityRouter.get("/get-priority",getPriority)
module.exports=PriorityRouter
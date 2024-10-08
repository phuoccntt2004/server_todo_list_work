const express = require("express")
const cors = require('cors')
const connectDB = require("./src/configs/connectDB")
const authRouter = require("./src/routers/authRouter")
const errorMiddleHandle = require("./src/middlewares/errorMiddleWare")
const WorkRouter = require("./src/routers/workRouter")
const PriorityRouter = require("./src/routers/priorityRouter")

const app = express()
app.use(cors())
require('dotenv').config
app.use(express.json());
const PORT = 3000
app.use('/auth' , authRouter);
app.use('/work', WorkRouter);
app.use('/priority', PriorityRouter);
app.use(errorMiddleHandle);
connectDB()

app.listen(PORT, (err) => {
    if(err) {
        console.log(err)
        return
    }

    console.log(`Server starting at http://localhost:${PORT}`)
})
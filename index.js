const express = require("express");
const app = express();
const cors = require("cors")
const attendanceRouter=require('./router/Attendence')
const marksRouter=require('./router/Marks')


//middleware
app.use(cors({origin: true, credentials: true}));
app.use(express.json())
app.use('/api/attendence',attendanceRouter)
app.use('/api/marks',marksRouter)

app.listen(3001,()=>{
    console.log("backend server is running")
})
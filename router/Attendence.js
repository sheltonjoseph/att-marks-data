const dbOP = require('../DbOperations/attendenceDB')
const router = require("express").Router();


//Post Attendence
router.post('/', async (req, res) => {
    console.log(req.body)
    const att= req.body
    //  console.log(att)
    //  console.log(res.)
      try {
        const postAttendance =  await dbOP.postAttendance(att)
              res.send(postAttendance)
      } catch (e) {
          res.status(400).send(e)
      }
  
  })

  router.get('/', async (req, res) => {
      try {
        const getAttendance =  await dbOP.getAttendance()
              res.send(getAttendance)
      } catch (e) {
          res.status(400).send(e)
      }
  
  })


  // get Class Attendence
  router.get('/class/:id', async (req, res) => {
    try {
      console.log(req.params.id)
      const getClassAttendance =  await dbOP.getClassAttendance(req.params.id)
            res.send(getClassAttendance)
    } catch (e) {
        res.status(400).send(e)
    }
})

  // get Class AND SUB Attendence
  router.get('/class/:id/:sub', async (req, res) => {
    let sub = req.params.sub
    try {
      console.log(req.params.id)
      const getClassSubAttendance =  await dbOP.getClassSubAttendance(req.params.id,sub)
            res.send(getClassSubAttendance)
    } catch (e) {
        res.status(400).send(e)
    }
})

  // Check for current date data
  router.get('/class/:id/:sub/:date', async (req, res) => {
    let sub = req.params.sub
    let date = req.params.date
    try {
      console.log(req.params.id)
      const getClassSubAttendance =  await dbOP.checkAttendance(req.params.id,sub,date) 
      res.send(getClassSubAttendance)
    } catch (e) {
        res.status(400).send(e)
    }
})

// get class attendence based on date
router.get('/classbydate/:id/:date', async (req, res) => {
  try {
    const getClassDateAttendance =  await dbOP.getClassDateAtt(req.params.id,req.params.date) 
    res.send(getClassDateAttendance)
  } catch (e) {
      res.status(400).send(e)
  }
})


  router.put('/', async (req, res) => {
    const att = req.body;
    try {
      const updateAttendance =  await dbOP.updateAttendance(att)
            res.send(updateAttendance)
    } catch (e) {
        res.status(400).send(e)
    }
})





  module.exports = router
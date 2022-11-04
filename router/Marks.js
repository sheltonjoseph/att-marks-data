const dbOP = require('../DbOperations/marksDB')
const router = require("express").Router();


//Post marks
router.post('/', async (req, res) => {
    console.log(req.body)
    const marks= req.body
    //  console.log(att)
    //  console.log(res.)
      try {
        const PostMarks=  await dbOP.enterMarks(marks)
              res.send(PostMarks)
  
      } catch (e) {
          res.status(400).send(e)
      }
  
  })


  //GET MARKS
  router.get('/', async (req, res) => {

      try {
        const getMarks=  await dbOP.getMarks()
              res.send(getMarks)
      } catch (e) {
          res.status(400).send(e)
      }
  
  })

    // get Class AND SUB Marks
    router.get('/class/:id/:sub', async (req, res) => {
      try {
        // console.log(req.params.sub)
        // console.log(req.params.id)
        const getClassSubMarks =  await dbOP.getClassSubMarks(req.params.id,req.params.sub)
              res.send(getClassSubMarks)
      } catch (e) {
          res.status(400).send(e)
      }
  })

  router.put('/', async (req, res) => {
    const marks = req.body;
    try {
      const updateMarks =  await dbOP.updateMarks(marks)
            res.send(updateMarks)
    } catch (e) {
        res.status(400).send(e)
    }
})





  module.exports = router
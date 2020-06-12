const router = require('express').Router()
const { Workout } = require('../models')

router.get('/workouts', async (req, res) => {
  try
  {
    let item = await Workout.find().limit(1).sort({_id: -1})
    res.json(item)
  }
  catch(err) {console.error(err)}

})

// get all workouts
router.get('/workouts/range', async (req, res) => {
  try
  {
    let item = await Workout.find()
    res.json(item)
  }
  catch (err) {console.error(err)}
  })

router.put('/workouts/:id', async (req, res) => {
  try {
    let item = await Workout.findByIdAndUpdate(req.params.id, {$push : {exercises : [req.body]}})
    res.json(item)
  } catch (e) {console.log(e)}
})


router.post('/workouts/', async (req, res) => {
  try { 
  let item = await Workout.create(req.body) 
  res.json(item)
  } catch(e) {console.log(e)}
})


module.exports = router
const router = require('express').Router()
const { Workout } = require('../models')
const { nextTick } = require('process')

router.get('/workouts', async (req, res) => {
  let workout = await Workout.find().limit(1).sort({_id: -1})
  res.json(workout)
  }
)

router.get('/workouts/range', async (req, res) => {
  let workout = await Workout.find()
  res.json(workout)
  }
)

router.put('/workouts/:id', async (req, res) => {
  try {
    await Workout.findByIdAndUpdate(req.params.id, req.body) 
    res.sendStatus(200)
  } catch (e) {console.log(e)}
})


router.post('/workouts/', async (req, res) => {
  try {
    await Workout.create(req.body) 
    res.sendStatus(200)
  } catch (e) {console.log(e)}

})


module.exports = router;
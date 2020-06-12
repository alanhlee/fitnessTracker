const router = require('express').Router()
const { Workout } = require('../models')
const { nextTick } = require('process')

router.get('/workouts', (req, res) => {
    Workout.find().limit(1).sort({_id: -1})
    .then(data => res.json(data))
    .catch(err => console.error(err))
})

router.get('/workouts/range', (req, res) => {
   Workout.find()
   .then(data => res.json(data))
   .catch(err => console.error(err))
  
  })

router.put('/workouts/:id', (req, res) => {
  console.log(req.body)
    Workout.findByIdAndUpdate(req.params.id, req.body)
    .then(()=> res.sendStatus(200))
    .catch(err => console.error(err))
})


router.post('/workouts/', (req, res) => {
    Workout.create(req.body) 
      .then(() => res.sendStatus(200))
      .catch(err => console.error(err));
})


module.exports = router;
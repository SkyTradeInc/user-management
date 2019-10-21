const express = require('express');
const router = express.Router();

const User = require('../../../../models/User')

const successResponse = (response, message = null, data = null) => {
  response.status(200).send({
    success: true,
    timestamp: Date.now(),
    message,
    data
  })
}

router.get('/db', (request, response) => {
  User.find({})
    .then(users => {
      return successResponse(response, 'Find users', users)
    })
})

router.delete('/db', (request, response) => {
  User.deleteMany({})
    .then(users => {
      return successResponse(response, 'Find users', users)
    })
})


module.exports = router;

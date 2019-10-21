const express = require('express');
const router = express.Router();

const successResponse = (response, message = null, data = null) => {
  response.status(200).send({
    success: true,
    timestamp: Date.now(),
    message,
    data
  })
}

router.get('/ping', (request, response) => {
  return successResponse(response, 'pong')
})

router.use('/user', require('./user'));
router.use('/admin', require('./admin'));



module.exports = router;

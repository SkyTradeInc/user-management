const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
const app = express();
const logger = require('./components/logger')
const router = require('./routes/');
app.use(express.json());
app.use(cors());
app.use('/', router)

module.exports = app

mongoose.connect('mongodb://127.0.0.1/userManagement', { useNewUrlParser: true }, (error) => {
  if(!error) return;
  logger.error('Connection to MongoDB unsuccessful')
})
const db = mongoose.connection

db.on('connected', () => {
  logger.info('Connected to MongoDB')
});

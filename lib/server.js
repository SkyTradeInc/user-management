const express = require('express');
const router = require('./routes/');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const logger = require('./components/logger');

const app = express();
app.use(helmet());
app.use(express.json());
app.use(cors());
app.use('/', router)


mongoose.connect('mongodb://127.0.0.1/userManagement', { useNewUrlParser: true }, (error) => {
  if(!error) return;
  logger.error('Connection to MongoDB unsuccessful')
})

const db = mongoose.connection

db.on('connected', () => {
  logger.info('Connected to MongoDB')
});

module.exports = app

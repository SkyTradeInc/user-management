const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
const app = express();
const router = require('./routes/');
app.use(express.json());
app.use(cors());
app.use('/', router)

module.exports = app

mongoose.connect('mongodb://127.0.0.1/userManagement', { useNewUrlParser: true });
  mongoose.connection.on('connected', () => {
  console.log(`[!] Connected to MongoD`);
});
mongoose.set('useFindAndModify', false);


mongoose.connection.on('error', (err) => {
  console.log(chalk.red(`[X] ${err}`))
});

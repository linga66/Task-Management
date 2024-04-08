const express = require('express')
const cors = require("cors")
const morgan = require('morgan')
const mongoose = require('mongoose')
require('dotenv').config()
const router = require('./router');
const app = express();
app.use(express.json());//mistake 1
app.use(cors());
app.use(morgan('tiny'));
app.use(router);
mongoose.connect(process.env.URL).then(() => {
    app.listen(8080 , () => console.log('starting on port 8080'));
}).catch((err) => {
    console.error(`DB connection error: ${err.message} `);
});
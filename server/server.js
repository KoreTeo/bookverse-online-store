require('dotenv').config();
const express = require('express');
const cors = require('cors'); 
const path = require('path');
const models = require('./models/models');
const sequelize = require('./db');
const fileUpload = require('express-fileupload');
const router = require('./routers/router');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');

const port = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use('/api', router);


app.use(errorHandler)

const start = async() => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(port, () => {
      console.log(`Server started on port ${port}`)
    });
  }
  catch (e) {
    console.log(e);
  }
}

start();
const path = require('path')
require('dotenv').config()
const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const cors = require('cors');

// Database
const db = require('./db');

// Test DB
db.authenticate()
  .then(()=> console.log('Database connected'))
  .catch((err) => console.log('Error: ' + err));

app.use(cors());

app.use('/product', require('./routes/productRouter'))

app.use('/user', require('./routes/userRouter'))

app.use('/order', require('./routes/orderRouter'))

app.use('/cart', require('./routes/cartRouter'))

app.use('/auth', require('./routes/authRouter'))

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})
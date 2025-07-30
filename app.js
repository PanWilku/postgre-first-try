const express = require('express');
const { indexRouter } = require('./routes/indexRoute');
const { createUserRouter } = require('./routes/createUserRoute');
const path = require("path");


const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));




app.use("/", indexRouter);
app.use("/create", createUserRouter);





app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
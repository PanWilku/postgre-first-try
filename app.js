const express = require('express');
const { indexRouter } = require('./routes/indexRoute');
const { createUserRouter } = require('./routes/createUserRoute');
const { deleteEveryUserRouter } = require('./routes/deleteEveryUserRoute');
const path = require("path");


const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




app.use("/", indexRouter);
app.use("/create", createUserRouter);
app.use("/delete", deleteEveryUserRouter);





app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
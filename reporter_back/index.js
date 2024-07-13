require('dotenv').config()
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mangoose = require('mongoose')

const app = express();

const PORT = process.env.PORT || 4040;
const start = async () => {
  try {
    await mangoose.connect(process.env.DB_URL)
    app.listen(PORT, () => {
      console.log(PORT);
    });
  } catch (error) {
    console.log(error);
  }
};

start()
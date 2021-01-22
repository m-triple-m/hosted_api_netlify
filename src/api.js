const express = require("express");
const serverless = require("serverless-http");
const userRouter = require("./Routes/userManager");

const app = express();
const router = express.Router();

app.use(`/.netlify/functions/api/user`, userRouter);

module.exports = app;
module.exports.handler = serverless(app);

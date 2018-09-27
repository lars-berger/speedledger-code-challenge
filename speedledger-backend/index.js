require("dotenv").config();
const koa = require("koa");
const logger = require("koa-logger");
const cors = require("kcors");
const helmet = require("koa-helmet");
const bodyParser = require("koa-bodyparser");
const mongoose = require("mongoose");
const app = (module.exports = new koa());

const errorHandler = require("./middleware/errorHandler");
const router = require("./router.js");

app
  .use(logger())
  .use(cors())
  .use(helmet())
  .use(bodyParser())
  .use(errorHandler)
  .use(router.routes())
  .use(router.allowedMethods())

  .listen(process.env.PORT || 3001, () => {
    console.log("listening on port", 3001);
  });

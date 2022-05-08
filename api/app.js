var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/usersRouter");
var placesRouter = require("./routes/placesRouter");
var photosRouter = require("./routes/photosRouter");

const { mongoose } = require("./database/database");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

/*const jwtMiddleware = function(req, res, next){
  cookie = res.cookie('session', req.body.username, {expire : new Date() + 14});
  next();
}*/

//app.use("/users", jwtMiddleware, usersRouter);

app.use("/users", usersRouter);
app.use("/stored", placesRouter);
app.use("/photos", photosRouter);

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;

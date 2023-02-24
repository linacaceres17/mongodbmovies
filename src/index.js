const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoute = require("./routes/user");
const reviewerRoute = require("./routes/reviewer")
const directorRoute = require("./routes/director")
const raitingRoute = require("./routes/raiting")
const moviedirectionRoute = require("./routes/moviedirection")


// settings
const app = express();
const port = process.env.PORT || 9000;


//middleware
app.use(express.json());
app.use("/api", userRoute);
app.use("/api", reviewerRoute);
app.use("/api", directorRoute);
app.use("/api", raitingRoute);
app.use("/api", moviedirectionRoute);


// routes
app.get("/", (req, res) => {
    res.send("Welcome to my API");
  });


// mongodb connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));


// server listening
app.listen(port, () => console.log("Server listening to", port));




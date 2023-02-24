const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoute = require("./routes/user");
const movieRoute = require("./routes/movie");
const actorRoute = require("./routes/actor");
const moviecastRoute = require("./routes/moviecast");
const genresRoute = require("./routes/genres");
const moviegenresRoute = require("./routes/moviegenres");

// settings
const app = express();
const port = process.env.PORT || 9000;


//middleware
app.use(express.json())
app.use("/api", userRoute, movieRoute, actorRoute, moviecastRoute, genresRoute, moviegenresRoute);

// routes
app.get('/', (req, res) => {
    res.send('Welcome to my API');
  });


// mongodb connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((error) => console.error(error));


// server listening
app.listen(port, () => console.log('Server listening to', port));




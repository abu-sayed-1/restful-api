const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb connect url here",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("connection is successful.."))
  .catch((err) => {
    console.log("connection is fail");
  });

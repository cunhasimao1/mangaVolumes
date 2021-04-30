require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const axios = require("axios");
const Saga = require("./models/Saga");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.mongoURI, {
    auth: {
      user: process.env.mongoUSER,
      password: process.env.mongoPASSWORD,
    },
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to DB..."))
  .catch((err) => console.log(err));
// mongoose.set('debug', true);

app.use("/api/sagas", require("./routes/api/sagas/sagas"));
app.use("/api/sagas/:idSaga/volumes", require("./routes/api/sagas/volumes/volumes"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname + "/dist"));
  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/dist/index.html"));
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running: http://localhost:${PORT}`));

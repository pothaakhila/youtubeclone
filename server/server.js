const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const port = 9999;

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(
  "mongodb+srv://you:tube@cluster0.4bk03.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then((req, res) => console.log("database connected ..."))
  .catch((err) => console.log(err.message));

app.use(require("./routes/Authentication"));

app.listen(port, () => {
  console.log(`server running at ${port}`);
});

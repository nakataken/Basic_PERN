const express = require("express");
const app = express();
const cors = require("cors");
const todosRoute = require("./routes/todos.js");

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.use("/todos", todosRoute);

app.listen(5000, () => {
  console.log("server has started on port 5000");
});

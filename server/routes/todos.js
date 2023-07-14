const express = require("express");
const router = express.Router();
const {
  createTodo,
  getAllTodos,
  getTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todos.js");

router.route("/").post(createTodo).get(getAllTodos);
router.route("/:id").get(getTodo).put(updateTodo).delete(deleteTodo);

module.exports = router;

const pool = require("../db.js");

// CREATE A TODO
const createTodo = async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES ($1) RETURNING *",
      [description]
    );
    res.status(200).json(newTodo.rows[0]);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// GET ALL TODOS
const getAllTodos = async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");
    res.status(200).json(allTodos.rows);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// GET A TODO
const getTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
      id,
    ]);
    res.status(200).json(todo.rows[0]);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// UPDATE A TODO
const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await pool.query(
      "UPDATE todo SET description = $1 WHERE todo_id = $2",
      [description, id]
    );
    res.status(200).json({ message: "Updated Successfully!" });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// DELETE A TODO
const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
      id,
    ]);
    res.status(200).json({ message: "Deleted Successfully!" });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

module.exports = {
  createTodo,
  getAllTodos,
  getTodo,
  updateTodo,
  deleteTodo,
};

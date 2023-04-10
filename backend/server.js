const cors = require("cors");
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const noteRoutes = require("./routes/noteRoutes");

const { notFound, errorHandler } = require("./Middleware/errorMiddleware");

const app = express();
dotenv.config();
connectDB();
app.use(express.json());
app.use(cors());

/* FOR TODO API */
const Todo = require("./models/Todo");

app.get("/todos", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

app.post("/todo/new", (req, res) => {
  const todo = new Todo({
    text: req.body.text,
  });
  todo.save();

  res.json(todo);
});

app.delete("/todo/delete/:id", async (req, res) => {
  const result = await Todo.findByIdAndDelete(req.params.id);

  res.json(result);
});

app.put("/todo/complete/:id", async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  todo.complete = !todo.complete;
  todo.save();
  res.json(todo);
});
//////////////////////////////////////////////////////////////

//FOR USERS API
app.use("/api/users", userRoutes);
//////////////////////////////////////////////////////////////

//FOR NOTES API
app.use("/api/notes", noteRoutes);

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  res.send(note);
});

app.use(notFound);
app.use(errorHandler);
///////////////////////////////////////////////////////////////

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started at port ${PORT}`));

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

//FOR COURSES API
const courses = require("./models/CoursesModel");

app.get("/courses", async (req, res) => {
  const Course = await courses.find();
  res.json(Course);
});

app.post("/course/new", (req, res) => {
  const course = new courses({
    title: req.body.title,
    description: req.body.description,
    picture: req.body.picture,
    enrollmentStatus: req.body.enrollmentStatus,
    content: req.body.content,
  });
  course.save();
  res.json(course);
});

app.put("/course/enrolledCourses/:id", async (req, res) => {
  const course = await courses.findById(req.params.id);
  res.json(course);
});

/*app.put("/course/enrolledCourses/:id", async (req, res) => {
  try {
    console.log("Course ID:", req.params.id);
    const course = await courses.findById(req.params.id);

    if (!course) {
      console.log(`Course with id ${req.params.id} not found`);
      return res.status(404).json({ message: "Course not found" });
    }
    await course.save();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}); 
*/
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

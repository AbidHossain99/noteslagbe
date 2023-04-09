const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const noteRoutes = require("./routes/noteRoutes");
const { notFound, errorHandler } = require("./Middleware/errorMiddleware");

const app = express();
dotenv.config();
connectDB();
app.use(express.json());

/* api_end_point */
app.get("/", (req, res) => {
  res.send("API is running successfully...");
});

app.use("/api/users", userRoutes);
app.use("/api/notes", noteRoutes);

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  res.send(note);
});

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started at port ${PORT}`));

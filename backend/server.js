const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const app = express();
dotenv.config();
connectDB();

/* api_end_point */
app.get("/", (req, res) => {
  res.send("API is running successfully...");
});

/*api_end_point calling notes.js and Getting data*/
app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  res.send(note);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started at port ${PORT}`));

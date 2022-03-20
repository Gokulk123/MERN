//import express
const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
//create object for express
const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("API is running.....................");
});

//get full records
app.get("/api/notes", (req, res) => {
  res.json(notes);
});

//get single record
app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  res.send(note);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));

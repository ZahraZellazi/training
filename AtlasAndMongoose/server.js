const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
//connct to the db
mongoose.connect('mongodb+srv://zahra:zahra030702@cluster0.e6d8kvo.mongodb.net/')

app.use(express.json());
app.use(cors());


const Todos =  mongoose.model('Todos', {todo: String})

app.get("/todos", async (req, res) => {
  //get all the todos from the db
  //find will get return all the objects inside of todos
  const todoList = await Todos.find()
  res.send(todoList);
});

app.post("/todos", async (req, res) => {
  const result = await Todos.create (req.body)
  res.send(result);
});

app.delete('/todos/:id', async (req, res) => {
  try {
      const databaseres = await Todos.deleteOne({ _id: req.params.id });
      if (databaseres.deletedCount === 0) {
          return res.status(404).send({ message: 'Todo not found' });
      }
      res.send({ message: 'Todo deleted successfully' });
  } catch (error) {
      res.status(500).send({ message: 'An error occurred', error });
  }
});

app.put('/todos/:id', async (req, res) => {
  try {
      const databaseup = await Todos.updateOne({ _id: req.params.id }, req.body);
      if (databaseup.nModified === 0) {
          return res.status(404).send({ message: 'Todo not found or no changes made' });
      }
      res.send({ message: 'Todo updated successfully', databaseup });
  } catch (error) {
      res.status(500).send({ message: 'An error occurred', error });
  }
});


app.listen(3333, () => {
  console.log("Server is running on port 3333");
});

const express = require('express');
const pool = require('./db');
const port = 1337;

const app = express(); // initialize server app with express
app.use(express.json()); // allow server to receive json data

// routes
app.get('/', async (req, res) => {
   try {
      const data = await pool.query('SELECT * FROM schools');
      res.status(200).send(data.rows); // rows = our table rows
      res.sendStatus(200);
   } catch (error) {
      console.log(error);
      res.sendStatus(500);
   }
});

app.post("/", async (req, res) => {
   const { name, location } = req.body;
   try {
      await pool.query('INSERT INTO schools (name, address) VALUES ($1, $2)', [
         name,
         location
      ]);
      res.status(200).send({
         message: `Successfully added child`,
      });
   } catch (error) {
      console.log(error);
      res.sendStatus(500);
   }
});

// make all function async to interact with db
app.get("/setup", async (req, res) => {
   try {
      await pool.query('CREATE TABLE schools( id SERIAL PRIMARY KEY, name VARCHAR(100), address VARCHAR(100))');
      res.status(200).send({message: `Successfully created Table`});
   } catch (error) {
      console.log(error);
      res.sendStatus(500);
   }
});

app.listen(port, () => console.log(`Server has started on port: ${port}`));
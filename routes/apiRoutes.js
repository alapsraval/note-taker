// Dependencies
const fs = require("fs");
const uniqid = require('uniqid');

// Read note data
const notesFileURL = "./db/db.json";
let notesData = [];

module.exports = (app) => {
  app.get('/api/notes', (req, res) => {
    fs.readFile(notesFileURL, (err, data) => {
      if (err) throw err;
      notesData = JSON.parse(data);
      res.json(notesData)
    })
  });

  app.post('/api/notes', (req, res) => {
    let newNote = req.body;
    newNote.id = uniqid();
    notesData.push(newNote);
    fs.writeFile(notesFileURL, JSON.stringify(notesData), err => {
      if (err) throw err;
      res.json(notesData);
    })
  });
};

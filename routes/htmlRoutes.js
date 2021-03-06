// Dependencies
const path = require('path');

module.exports = (app) => {
  app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));

  app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '../public/notes.html')));

  // If no matching route is found default to index page
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
};
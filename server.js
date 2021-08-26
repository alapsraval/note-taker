// Dependencies
const express = require('express');

// setup for express server
const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//serving static files such as images, css, js files
app.use(express.static("public"));

// Router
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// App Listner
app.listen(PORT, () => {
  console.log(`App running on PORT: ${PORT}. Access app at http://localhost:${PORT}`);
});
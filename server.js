const express = require("express");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// STATIC FOLDER
app.use(express.static("public"));

// ROUTES
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

// LISTEN
app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});

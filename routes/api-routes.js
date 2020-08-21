const db = require("../db/db.json");
const fs = require("fs");

const { v4: uuidv4 } = require("uuid");
const { isBuffer } = require("util");

module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    return res.json(db);
  });

  app.post("/api/notes", function (req, res) {
    let note = req.body;
    note.id = uuidv4();
    db.push(note);
    res.json(true);
  });

  app.delete("/api/notes", function (err, data) {
    let noteId = req.body.id;
  });
};

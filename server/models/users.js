var db = require('../db');

module.exports = {
  getAll:  cb => {
    var queryText = `SELECT * FROM users;`;
    db.connection.query(queryText, (err, res) => {
      if (err) {
        cb(err);
      } else {
        cb(null, res);
      }
    });
  },

  create: ({username}, cb) => {
    var queryText = `INSERT INTO users (username) VALUES ('${username}')`;
    db.connection.query(queryText, (err, res) => {
      if (err) {
        cb(err);
      } else {
        cb(null, res);
      }
    });
  }
};

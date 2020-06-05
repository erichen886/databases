var db = require('../db');

module.exports = {
  getAll: cb => {
    var queryText = `SELECT messages.messageText, users.username FROM messages, users WHERE users.id = messages.usernameId;`;
    db.connection.query(queryText, (err, res) => {
      if (err) {
        console.log ('error from model messages.getAll:', err);
        cb(err);
      } else {
        cb(null, res);
      }
    });
  }, // a function which produces all the messages
  create: ({username, message, roomname}, cb) => {
    console.log('CREATE HELLO');
    var queryText = `INSERT INTO messages (messageText, usernameId, roomnameId) VALUES( '${message}', (SELECT users.id FROM users WHERE users.username = '${username}'), (SELECT rooms.id FROM rooms WHERE rooms.roomname = '${roomname}'));`;
    db.connection.query(queryText, (err, res) => {
      if (err) {
        cb(err,null);
      } else {
        cb(null, res);
      }
    });
  } // a function which can be used to insert a message into the database
}

// INSERT INTO messages (messageText, usernameId, roomnameId) VALUES( 'hi', (SELECT users.id FROM users WHERE users.username = 'eric'), (SELECT rooms.id FROM rooms WHERE rooms.roomname = 'lobby'));
var messages = require('./messages.js');
var users = require('./users.js');
var messageObj = { username: 'eric', message: 'hi', roomname: 'lobby' };
var userObj = { username: 'Jay' };

// messages.create(messageObj, (err, data)=> {
//   if(err) {
//     console.log('this is our error: ', err);
//   } else {
//     console.log('this is our data: ', data);
//   }
// });

// users.getAll((err, user)=> {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(user);
//   }
// });

// users.create(userObj, (err, data) => {
//   if (err) {
//     console.log('this is our error: ', err);
//   } else {
//     console.log('this is our data: ', data);
//   }
// });
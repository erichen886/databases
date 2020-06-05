var models = require('../models');

module.exports = {
  // a function which handles a get request for all messages
  get: (req, res) => {
    models.messages.getAll((err, data) => {
      if (err){
        console.log ('controller error in messages.get', err);
      } else {
        res.status(200).send(data);
      }
    })

  },
  // a function which handles posting a message to the database, WHERE WE SUPPOSED TO FIND REQ.BODY
  post: (req, res) => {
    models.messages.create(req.body, err => {
      console.log(req.body);
      if(err) {
        console.log('hello we have an error in post message controller');
        res.status(400).send('error')
      }else {
        res.status(200).send('message posted')
      }
    })
  }
};

const router = require('express').Router();
const fs = require('fs');

/* GET */
router.get('/notes', (req, res) => {
  fs.readFile('./db/db.json', 'utf8', function(err, contents) {
    var words = JSON.parse(contents);
    console.log(words);
    res.send(words);
  });
});

/* POST */
router.post('/notes', (req, res) => {
    fs.readFile('db/db.json',(err, data) => {
      // Check for error
      if (err) throw err;
      // Handle data gathering for json update
      let notes = JSON.parse(data);
      req.body.id = notes.length.toString();
      let note = {
        title: req.body.title,
        text: req.body.text,
        id: req.body.id
      };
      console.log(notes.length);
      console.log(note);
      res.json(note);
      // Add data to existing json array
      /* json.push(note); */
  
      // Write updated json to array 
      /* fs.writeFile('db/db.json', JSON.stringify(json, null, 2), (err) => {
        // Check for error
        if (err) throw err;
        res.send('200');
      }); */
    });
  });

module.exports  = router;

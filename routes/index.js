const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

router.get('/challenge', (req, res) => {
  let test = "Salut beau gosse";
  res.send(test);
});


router.post('/challenge', (req, res) => {
  let payload = req.body;
  let newPayload = payload.test + " coucou depuis le serveur"

  res.send(newPayload);
});


module.exports = router;

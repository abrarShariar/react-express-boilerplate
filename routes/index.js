const express = require('express'),
      router = express.Router();

router.get('/', (req, res, next) => {
  res.json({
    title: 'Hello World'
  })
});

router.get('/users', (req, res, next) => {
  res.json([
    {
      id: 1,
      name: 'Abrar'
    },
    {
      id: 2,
      name: 'Shariar'
    },
    {
      id: 3,
      name: 'Asad'
    }
  ])
})

module.exports = router;

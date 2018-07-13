const express = require('express'),
      router = express.Router();

router.get('/', (req, res, next) => {
  res.json({
    id: 1,
    name: 'Abrar',
    skills: ['C++', 'JavaScript', 'Go', 'Python']
  })
});

module.exports = router;

const express = require('express');
const router = express.Router();

router.get('/:resource', function (req, res, next) {

  let resource = req.params.resource;

  res.json({
    confirmation: 'success',
    resource: req.params.resource
  })


})

module.exports = router;

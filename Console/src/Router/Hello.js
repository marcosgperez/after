const { Router } = require('express');

const router = Router();

router.get('/:nombre', (req, res) => {
  try {
    res.send(`Hola ${req.params.nombre}`)
  }
  catch (err) {
    res.status(400).send(err)
  }
});


module.exports = router;
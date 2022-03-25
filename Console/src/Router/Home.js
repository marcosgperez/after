const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  try {
    res.status(200).send("Hello")
  }
  catch (err) {
    res.status(400).send(err)
  }
});

router.get('/:id', (req, res) => {
  try {
    const { id } = req.params;
    res.status(200).send(id)
  }
  catch (err) {
    res.status(400).send(err.message)
  }
})

router.post('/:saludo', (req, res) => {
  try {
    const { nombre, apellido } = req.body;
    const { saludo } = req.params;
    res.status(200).send(`${saludo.charAt(0).toUpperCase() + saludo.slice(1)} ${nombre} ${apellido}`);
  }
  catch (err) {
    res.status(400).send(err.message)
  }
})

module.exports = router;
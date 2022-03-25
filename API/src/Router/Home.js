const { Router } = require('express');

const router = Router();
const apiData = require('../../Request');

router.get('/', async (req, res) => {
  try {
    const data = await apiData();
    res.status(200).send(data)
  } catch (err) {
    res.status(400).send(err)
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const data = await apiData();
    const filt = data.filter(e => e.id == id)
    if (filt.length === 0) {
      res.status(404).send("Raza no encontrada")
    } else{
      res.status(200).send(filt)
    }
  }
  catch (err) {
    res.status(400).send(err.message)
  }
})

module.exports = router;
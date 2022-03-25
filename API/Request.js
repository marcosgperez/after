const axios = require('axios');
require('dotenv').config();
const {
  KEY
} = process.env;

const apiData = async () => {
  const api = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${KEY}`);

  const dataApi = await api.data.map(e => {
    return {
      id: e.id,
      name: e.name,
      life: e.life_span,
      image: e.image.url,
    };
  });
  return dataApi;
};

module.exports = apiData
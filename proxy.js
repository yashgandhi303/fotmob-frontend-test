const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 8002;
app.use(cors());

app.get('/fotmob-api/search', async (req, res) => {
  try {
    const { term } = req.query;
    const response = await axios.get(`https://www.fotmob.com/api/search/searchData`, {
      params: { term },
    });
    res.json(response.data.squad?.dataset);
  } catch (error) {
    res.status(500).send('Error fetching data from Fotmob API');
  }
});

app.get('/fotmob-api/player', async (req, res) => {
  try {
    const { id } = req.query;
    const response = await axios.get(`https://www.fotmob.com/api/playerData`, {
      params: { id },
    });

    const playerData = response.data;
    const [firstName, ...lastNameParts] = playerData?.name?.split(' ') || ['', ''];
    const lastName = lastNameParts.join(' ');

    const playerResponse = {
      id: playerData?.id,
      player: {
        firstname: firstName || '',
        lastname: lastName || '',
        birthday: playerData?.birthDate?.utcTime || '',
        image: `https://images.fotmob.com/image_resources/playerimages/${playerData?.id}`,
        team: playerData?.primaryTeam?.teamName || '',
      },
    };

    res.json(playerResponse);
  } catch (error) {
    res.status(500).send('Error fetching data from Fotmob API');
  }
});

app.listen(port, () => {
  console.log(`Proxy server running at http://localhost:${port}`);
});

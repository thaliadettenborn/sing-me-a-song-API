require('dotenv').config();
const express = require('express');

const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  try {
    next();
  } catch (err) {
    res.sendStatus(500);
  }
});

require('./utils/loadRelashionships');
const routers = require('./routers');

app.use('/api/genres', routers.genres);
app.use('/api/recomendations', routers.recomendations);

module.exports = app;

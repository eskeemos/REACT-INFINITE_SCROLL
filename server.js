import fetch from 'node-fetch';
import nodeFetch from 'node-fetch';
import { createApi } from 'unsplash-js';
import express from 'express';

const unsplash = createApi({
  accessKey: '5koucK7dZTYSWU8KnFZNmLEwBL5pNsvrgkxh5O4QJCg',
  fetch: nodeFetch,
});

const app = express();

app.get('/api/photos', (req, res) => {
  unsplash.photos.getRandom({
    count: 28
  })
    .then(x => res.json(x))
});

  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
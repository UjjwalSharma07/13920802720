const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 8008;

app.use(express.json());

app.get('/numbers/primes', (req, res) => {
  const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23];
  res.json({ numbers: primes });
});

app.get('/numbers/fibo', (req, res) => {
  const fibo = [1, 2, 3, 5, 8, 13, 21];
  res.json({ numbers: fibo });
});

app.get('/numbers/odd', (req, res) => {
  const odd = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23];
  res.json({ numbers: odd });
});
app.get('/numbers', async (req, res) => {
  const urls = req.query.url;

  if (!urls) {
    return res.status(400).json({ error: 'URL_Params "url" is required.' });
  }

  try {
    const urlAr = Array.isArray(urls) ? urls : [urls];
    const promises = urlAr.map(url => axios.get(url, { timeout: 500 }));
    const results = await Promise.all(promises);
    const NumbersArr = results.map(response => response.data.numbers).flat();
    const MergeNum = Array.from(new Set(NumbersArr)).sort((a, b) => a - b);
    return res.json({ numbers: MergeNum });
  } catch (error) {
    return res.status(500).json({ error: 'An error occurred while fetching data.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.send("This is NUMBER_MANAGEMENT_SYSTEM project !!!");
});
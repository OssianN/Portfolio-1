const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;
const fs = require('fs');

app.use(express.json());
app.use(cors());

const readData = () => {
  return fs.readFileSync('./data.json', (err, data) => {
    if (err) console.error(err, 'error in read');
    if (!data) return false;
    return data;
  });
};

const writeData = data => {
  return fs.writeFile('./data.json', data, err => {
    if (err) console.error(err, 'error in post');
    return data;
  });
}

app.get('/', (req, res) => {
  try {
    res.send(JSON.stringify('This is the wine we whine about'));
  } catch (err) {
    console.error(err, 'IN GET ROOT');
    res.send(err, 'IN GET ROOT');
  }
});


app.get('/wines', async (req, res) => {
  try {
    const data = readData();
    const parsedData = JSON.parse(data);
    res.status(200).send(JSON.stringify(parsedData));
  } catch (err) {
    console.error(err, 'IN GET /WINES');
    res.status(500).send('IN GET /WINES');
  }
});

app.post('/wines', (req, res) => {
  try {
    const data = readData();
    const parsedData = JSON.parse(data);
    const wineArr = parsedData.wineArr;
    wineArr.push(req.body);
    const finishedJson = { "wineArr": wineArr };
    const jsonWine = JSON.stringify(finishedJson);
    writeData(jsonWine);
    res.status(203).send();
  } catch (err) {
    console.error(err, 'IN POST /WINES');
    res.status(500).send(err, 'IN POST /WINES');
  }
});

app.delete('/wines', (req, res) => {
  try {
    const data = readData();
    const parsedData = JSON.parse(data);
    const wineArr = parsedData.wineArr;
    const id = req.body.id;
    wineArr.forEach( (wine, i) => {
      if(`${wine.shelf}:${wine.row}` === id) {
        wineArr.splice(i, 1);
      }
    })
    const finishedJson = { "wineArr": wineArr };
    const jsonWine = JSON.stringify(finishedJson);
    writeData(jsonWine);
    res.status(204).send();
  } catch (err) {
    console.error(err, 'IN DELETE /WINES');
    res.status(500).send(err, 'IN DELETE /WINES');
  }
});

app.listen(port, () => console.log(`test-api is running on port ${port}`));

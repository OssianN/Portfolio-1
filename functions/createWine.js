const fs = require('fs');

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

exports.handler = async (event) => {
  const data = readData();
  const parsedData = JSON.parse(data);
  const wineArr = parsedData.wineArr;
  const newWine = event.body.toString();
  wineArr.push(newWine);
  const finishedJson = { "wineArr": wineArr };
  const jsonWine = JSON.stringify(finishedJson);
  // writeData(jsonWine);
  return {
    statusCode: 203,
    body: JSON.stringify(newWine)
  }
}

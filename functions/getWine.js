const fs = require('fs');

const readData = () => {
  return fs.readFileSync('./data.json', (err, data) => {
    if (err) console.error(err, 'error in read');
    if (!data) return false;
    return data;
  });
};

exports.handler = async () => {
  const data = readData();
  const parsedData = JSON.parse(data);
  return {
    statusCode: 200,
    body: JSON.stringify(parsedData.wineArr)
  };
};

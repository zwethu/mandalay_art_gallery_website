const csv = require('csv-parser');
const fs = require('fs');

async function parseCsvToArray(filePath) {
  const results = [];
  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => resolve(results))
      .on('error', reject);
  });
}

async function myFunction() {
  try {
    const results = await parseCsvToArray('artists.csv');
    console.log(results[1].paintings);
  } catch (error) {
    console.error(error);
  }
}

myFunction();
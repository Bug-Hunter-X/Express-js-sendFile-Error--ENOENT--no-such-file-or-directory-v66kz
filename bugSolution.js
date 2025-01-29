const express = require('express');
const fs = require('node:fs/promises');
const app = express();
async function sendFileSafely(req, res, filePath) {
  try {
    await fs.access(filePath);
    res.sendFile(filePath);
  } catch (err) {
    if (err.code === 'ENOENT') {
      res.status(404).send('File not found');
    } else {
      console.error('Error serving file:', err);
      res.status(500).send('Internal Server Error');
    }
  }
}
app.get('/', async (req, res) => {
  await sendFileSafely(req, res, __dirname + '/index.html');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // This will cause an error if the file doesn't exist
  res.sendFile(__dirname + '/index.html');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
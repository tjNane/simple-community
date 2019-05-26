const express = require('express');
const path = require('path');

const app = express();

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('hello');
})

app.listen(8800, () => {
  console.log('app is running at port 8800...')
})
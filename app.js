const express = require('express');
const path = require('path');

const app = express();

app.use('/public', express.static(path.join(__dirname, 'public')));
app.engine('html', require('express-art-template'));

app.get('/', (req, res) => {
  res.render('index.html');
})

app.listen(8800, () => {
  console.log('app is running at port 8800...')
})
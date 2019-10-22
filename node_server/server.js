const exp = require('express');
const app = exp();

app.get('/', (req, res) => {
  res.send('123');
});

app.listen(3000, () => {
  console.log('boogeying on port 3000');
});

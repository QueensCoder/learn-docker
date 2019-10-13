const exp = require('express');
const app = exp();

app.get('/', (req, res) => {
  res.send('found me while running on docker w00t!');
});

app.listen(3000, () => {
  console.log('boogeying on port 3000');
});

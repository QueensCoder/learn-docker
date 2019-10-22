const app = require('express')();
const client = require('redis').createClient();

//initialize visits at 0
client.set('visits', 0);

// when user hits this route return the vists to the client
// increment visit by one
app.get('/', (req, res) => {
  redisClient.get('visits', (err, visits) => {
    res.send('Number of visits to server ' + visits);
    client.set('visits', parseInt(visits) + 1);
  });
});

app.listen(8081, () => {
  console.log('listening on port 8081 wo000t');
});

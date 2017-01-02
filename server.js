const express = require('express');
var request = require('request')

const app = express();

app.set('port', (process.env.PORT || 3001));

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.get('/api/streams/items', (req, res) => {
  request('http://streams.paperboy-149314.appspot.com/items', function(err, r, body) {
    res.json(JSON.parse(body));
  })
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});

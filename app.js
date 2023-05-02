const express = require('express');
app = express();
app.use(express.static('public'));
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.sendFile(__dirname + '/Frontend/home.html');
});


app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});



const express = require('express');
const ejs = require('ejs');

const port = process.env.PORT || 4000
const app = express();


app.use(express.static('./public'));
app.engine('html', ejs.renderFile);

app.get('/:id', (req, res) => {
  res.render('../public/index.html');
})

app.listen(port, () => { console.log (`Listening on port ${port}`)});


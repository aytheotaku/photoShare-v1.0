const express = require('express');
const app = express();
const PORT_NUMBER = 3000;

app.use(express.static('public'))

app.get('/', (req, res) => console.log('Hello World'))


app.listen(PORT_NUMBER, () => {`Now listening at port ${PORT_NUMBER}`})
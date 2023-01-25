const express = require('express');
const app = express();
const PORT_NUMBER = 3000;

// telling express where to get static files to be served
app.use(express.static('public'))

//telling express to use ejs as template engine
app.set('view-engine', 'ejs')

app.get('/', (req, res) => {
    res.send('Hello World')
})


app.listen(PORT_NUMBER, () => console.log(`Now listening at port ${PORT_NUMBER}`))
const express = require('express');
const app = express();
const PORT_NUMBER = 3000;

// telling express where to get static files to be served
app.use(express.static('public'))
app.set("view engine", "ejs")


//telling express to use ejs as template engine

app.get('/', (req, res) => {
    res.render("index");
});


app.listen(PORT_NUMBER, () => console.log(`Now listening at port ${PORT_NUMBER}`))
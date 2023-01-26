const express = require('express');
const app = express();
const db = require('./models');
const bodyParser = require('body-parser');



app.use(bodyParser.json())
// teling express where to get static files to be served
app.use(express.static('public'))
//telling express to use ejs as template engine
app.set("view engine", "ejs")

  
//home route
app.get('/', (req, res) => {
    res.render("index");
});


//connecting to database
const sqlPort = 3305 
db.sequelize
    .sync({})
    .then(() => {
        app.listen(sqlPort, () => console.log(`Maria db connection successful at ${sqlPort}`))

    })
    .catch((err) => console.error("Unable to connect to the database"))




//SERVER
const PORT_NUMBER = 3000;
app.listen(PORT_NUMBER, () => console.log(`Now listening at port ${PORT_NUMBER}`))
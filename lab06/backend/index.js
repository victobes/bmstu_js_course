const express = require('express')
const app = express()

const animalsRouter = require('./routers/animals.routers')
const { serverConfig } = require('./config')

const db = require('./database/database.js')
db.authenticate()
    .catch(error => console.error(error))

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(express.json())
app.use('/animals', animalsRouter)

app.listen(serverConfig.port, serverConfig.host, () => {
    console.log(`Server starts at http://${serverConfig.host}:${serverConfig.port}`);
});
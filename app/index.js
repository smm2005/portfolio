const express = require('express');
const app = express();
const router = express.Router();
const serverless = require('serverless-http');
const hostname = "127.0.0.1";
const port = process.env.PORT || 3000;
const path = require('node:path');

router.use(express.static("static"));

app.use('/', router);
module.exports.handler = serverless(app);

app.get('/', (req, res) => {

});

app.listen(port, hostname, ()=>{
    console.log(`Listening to app on http://${hostname}:${port}/app/`);
});


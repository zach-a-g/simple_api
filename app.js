`use strict`

const http = require(`http`)
const hostname = '127.0.0.1';
const port = 3000;

const express = require('express');
const app = express();

const cors = require('cors');

const helmet = require('helmet');
app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use(cors());

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server is running on http://${hostname}:${port}`)
});

const rootController = require('./routes/index');

app.use('/', rootController);
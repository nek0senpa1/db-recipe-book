
const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const softserver = express();

softserver.use(helmet());
softserver.use(express.json());



const knexConfig = require('../knexfile');



const db = knex(knexConfig.development);

softserver.get('/', (req, res) => {
    res.send ({message: 'Looks like we made it.  Look how far we have come together'})
});


module.exports = softserver;
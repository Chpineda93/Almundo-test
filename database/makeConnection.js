const options = require('./connection');
const knex = require('knex');

const db = knex(options);

module.exports = db;
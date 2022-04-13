require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
   user: "txmsumnfulkclw",
   password: "f4b58d16267c80b381688f5caaf10a6069276ad7b81f1cb3744bca611dbaa979",
   host: "ec2-52-73-155-171.compute-1.amazonaws.com",
   port: "5432",
   database: "d4fk1q4d3m2ohp", 

   ssl:{
       rejectUnauthorized: false,
   }
});

module.exports = { pool };
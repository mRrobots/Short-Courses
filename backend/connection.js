const { Client } = require("pg");

const client = new Client({
  host: "ec2-52-73-155-171.compute-1.amazonaws.com",
  user: "txmsumnfulkclw",
  port: 5432,
  password: "f4b58d16267c80b381688f5caaf10a6069276ad7b81f1cb3744bca611dbaa979",
  database: "d4fk1q4d3m2ohp",
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = client;

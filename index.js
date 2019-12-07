const express = require('express');
var redis = require('ioredis');

const app = express();

const redisHost = process.env.REDIS_HOST || 'redis';
const redisPort = process.env.REDIS_PORT || '6379';
const redisClient = new redis({
  host: redisHost,
  port: redisPort,
  db: process.env.REDIS_DB_NUM || 0,
});

app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.listen(3000);

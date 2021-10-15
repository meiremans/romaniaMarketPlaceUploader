const supertest = require('supertest');
const app = require('../app.js');


exports.request = supertest.agent(app);


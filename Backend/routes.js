const express = require('express');
const CandidateController = require('./controllers/candidateController');
const routes = new express.Router();

routes.post('/register', CandidateController.register);

routes.get('/', (req, res) => {
    res.send('teste');
});

module.exports = routes;
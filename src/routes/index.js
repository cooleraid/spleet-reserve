const fs = require('fs');

const router = require('express').Router();
const routes = fs.readdirSync(__dirname).filter(file => !['index.js'].includes(file));

routes.forEach(route => router.use(``, require(`./${route}`)))

module.exports = router;
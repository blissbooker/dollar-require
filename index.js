const path = require('path');
const base = path.resolve(__dirname, '..', '..');

global.$require = (path) => require(base + '/' + path);

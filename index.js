
const path = require('path');
const base = path.resolve(__dirname, '..', '..');
console.log(__dirname, 'base', base);
global.$require = (path) => require(base + '/' + path);

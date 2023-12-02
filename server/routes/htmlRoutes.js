const path = require('path');

module.exports = function (App) {
  App.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../../client/index.html'))
  });
}
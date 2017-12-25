let requireDirectory = require('require-directory');

let check = function (path) {
  if (/123\.js$/.test(path)) {
    return true; // don't include
  } else {
    return false; // go ahead and include
  }
};
module.exports = requireDirectory(module, {exclude: check});

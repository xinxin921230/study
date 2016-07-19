var sha256 = require('sha.js')('sha256')

module.exports = function(tobeHash){
  return sha256.update(tobeHash, 'uft-8').digest('hex')
}
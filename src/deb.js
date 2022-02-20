const util = require('util')
const deb = x => console.log(util.inspect(x, {depth: null}))
module.exports = deb;
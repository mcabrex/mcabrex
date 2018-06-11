const {Projects} = require('../db')

module.exports = {
    index (req, res) {
        console.log(Projects)
        res.json(Projects)
    },
}

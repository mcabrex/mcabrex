const {Projects} = require('../db')

module.exports = {
    async index (req, res) {
        try {
            res.json(Projects)
        }  catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to fetch the projects'
            })
        }
    },
}

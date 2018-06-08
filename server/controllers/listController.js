const {List} = require('../models')

module.exports = {
    async index (req, res) {
        try {
            let lists = await List.findAll()
            res.send(lists)
        } catch (err) {
          res.status(500).send({
            error: 'An error has occured trying to fetch the songs'
          })
        }
    },
}

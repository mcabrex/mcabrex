module.exports = {
    async index (req, res) {
        try {
          let users = [
            {
                id: 1,
                username: 'somebody'
            },
            {
                id:2,
                username: 'somebodye-else'
            }
          ]
          res.send(users)
        } catch (err) {
          res.status(500).send({
            error: 'An error has occured trying to fetch the songs'
          })
        }
    },
}

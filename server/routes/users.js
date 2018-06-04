let users = [
  {
    id: 1,
    username: 'somebody'
  },
  {
    id: 2,
    username: 'somebodyelse'
  }
]

module.exports = (req,res,next) => {
  res.json(users)
};

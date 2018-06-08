const {
    sequelize,
    List,
    ListItem
} = require('../models')

const Promise = require('bluebird')
const lists = require('./list.json')
const listItems = require('./listItem.json')

sequelize.sync({force: true})
    .then(async function(){
        await Promise.all(
            lists.map(list => {
              List.create(list)
            })
          )
      
          await Promise.all(
            listItems.map(listItem => {
              ListItem.create(listItem)
            })
          )   
    })
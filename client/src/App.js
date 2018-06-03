import React, { Component } from 'react';
import {PageTable} from './components'
import './FrontPage.css';

let pageTableChildren = []
for(let i = 0; i < 4; i++){
  pageTableChildren.push({
    growth: 1,
    clickSwitch: false
  })
}
//set up the initial children for the pages table

class App extends Component {
  constructor(props){
    super();
    this.state = {
      title: "{  }",
    }
  }

  componentDidMount(){
    //the whole purpose of this is to create a title that appears letter by letter
    let name = "Mario Leo Cabardo"
    //name to be inserted into the title, "{  }" 
    let newTitleArr = this.state.title.split('')
    let newTitle = ""
    let delay = 200
    //an initial delay to be incremented during the loop
    for(let i = 0; i < name.length; i++){
      let letter = name[i]
      setTimeout(() => {
        newTitleArr.splice(newTitleArr.length-2,0,letter)
        newTitle = newTitleArr.join('')
        //take the array of the title and insert the current letter into it, then join it and set the state
        this.setState({
          title: newTitle
        })
      },delay)
      delay+=200
    }
  }

  render() {
    return (
      <div>
        <h1 className="Title">{this.state.title}</h1>
        <PageTable />
      </div>
    );
  }
}

export default App;

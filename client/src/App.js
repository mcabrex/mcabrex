import React, { Component } from 'react';
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
      pageTableChildren,
      shrink: 0,
      childGrowthSwitch: false
    }
    this.handleClick = this.handleClick.bind(this)
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

  handleClick(e){
    let id = Number(e.target.id)
    //for some reason the id comes off as a string so turn it into a number
    let children = this.state.pageTableChildren
      this.setState({
        pageTableChildren: children.map((child,ind)=>{
          //okay here's the idea, the only time you want to expand what's been clicked is if what you've clicked isn't expanded (aka if it's clickSwitch is off(false))
          if(ind === id && !child.clickSwitch){
            //here we check the pageTableChildren array for the child we Clicked on, if it isn't expanded then its clickSwitch should be off
            //set clickSwitch to true (because now we HAVE clicked it) and expand the child
            child.clickSwitch = true
            child.growth = 10
          } else {
            //every other situation you want to collapse the target
            child.clickSwitch = false
            child.growth = 1
          }
          return child
        }),
      })
  }

  createPageChildren(){
    let pages = []
    for(let i = 0; i < 4; i++){
      pages.push(
        <div key={i} id={i} className="Page-Table-Children" onClick={this.handleClick} style={
          {
            flexGrow: this.state.pageTableChildren[i].growth
          }
        }/>
      )
    }
    return pages
  }

  render() {
    return (
      <div>
        <h1 className="Title">{this.state.title}</h1>
        <div className="Page-Table">
          {this.createPageChildren()}
        </div>
      </div>
    );
  }
}

export default App;

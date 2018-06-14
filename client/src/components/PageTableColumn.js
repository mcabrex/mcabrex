import React, { Component } from 'react';

export default class PageTable extends Component {
  constructor(props){
    super();
    this.state = {
      projects: [],
      pageTableColumns: [],
      childGrowthSwitch: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentWillMount(){
    let projects = []
    let columns = []
    fetch('/projects')
      .then(results => results.json())
      .then(projects => {
        
        projects.forEach(project=>
          columns.push({
            growth: 1,
            clickSwitch: false
          })
        )
        
        this.setState({
          projects,
          pageTableColumns: columns
        })
      })
  }

  handleClick(e){
    let id = Number(e.target.id)
    console.log(id)
    //for some reason the id comes off as a string so turn it into a number
    let children = this.state.pageTableColumns
      this.setState({
      pageTableColumns: children.map((child,ind)=>{
        //okay here's the idea, the only time you want to expand what's been clicked is if what you've clicked isn't expanded (aka if it's clickSwitch is off(false))
        if(ind === id && !child.clickSwitch){
        //here we check the pageTableColumns array for the child we Clicked on, if it isn't expanded then its clickSwitch should be off
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

  render() {
    let state = this.state
    return (
      <div className="page-table">
        {
          state.pageTableColumns.map((column,ind)=>{
            return <div key={ind} id={ind} className="page-table-columns" onClick={this.handleClick} style={
              {
                flexGrow: this.state.pageTableColumns[ind].growth
              }
            } />
          })
        }
      </div>
    )
  }
}
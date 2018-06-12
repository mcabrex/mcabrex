import React, { Component } from 'react';

export default class Blank extends Component {
  constructor(props){
      super();
      this.state = {
        projects: []
      }
    }

    componentDidMount(){
      let projects = []
      fetch('/projects')
        .then(results => results.json())
        .then(projects => {
          this.setState({projects})
        })
    }

    render() {
      return (
        <div>
            {
              this.state.projects.map((project,ind) => 
              <div class="page-table-project" key={ind}>
                {project.title}
              </div>
              )
            }
        </div>
      );
    }
}
import React, { Component } from 'react';
import PageTableColumn from './PageTableColumn'


// let pageTableColumns = []
// for(let i = 0; i < 4; i++){
//   pageTableColumns.push({
//     growth: 1,
//     clickSwitch: false
//   })
// }
// //set up the initial children for the pages table, to be grabbed from the backend later

export default class PageTable extends Component {
  constructor(props){
    super();
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <PageTableColumn />
      </div>
    )
  }
}
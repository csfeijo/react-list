import React, { Component } from 'react';

class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    let items = this.props.items || [];
    return (
      <div>
        <h3>{this.props.title}</h3>
        <ul>
          {items.map(item  =><li>{item}</li>)}
        </ul>
      </div>
    )
  }
}

export default List;
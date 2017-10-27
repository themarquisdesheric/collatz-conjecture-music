import React, { Component } from 'react';

export default class Hoverable extends Component {
  state = {
    hover: false
  }

  toggleHover() {
    this.setState( (prevState) => ({ hover: !prevState.hover }));
  }

  render() {
    let color = this.state.hover ? '#eee' : 'rgba(238, 238, 238, .1)';

    return (
      <div 
        style={{color}}
        onMouseEnter={this.toggleHover.bind(this)}
        onMouseLeave={this.toggleHover.bind(this)}  
      >
        {this.props.children}
      </div>
    );
  }
}
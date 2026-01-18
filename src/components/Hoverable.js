import React, { Component } from 'react';

import { func } from '../proptypes-constants';

export default class Hoverable extends Component {
  static propTypes = {
    children: func.isRequired
  };

  state = {
    hover: false
  };

  toggleHover = () => {
    this.setState({ hover: !this.state.hover });
  };

  render() {
    return (
      <div 
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}  
      >
        {this.props.children({ hover: this.state.hover })}
      </div>
    );
  }
}

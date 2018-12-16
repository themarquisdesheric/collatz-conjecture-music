import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Hoverable extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  state = {
    hover: false
  };

  toggleHover = () => {
    this.setState( (prevState) => ({ hover: !prevState.hover }));
  }

  render() {
    let color = this.state.hover ? '#eee' : 'rgba(238, 238, 238, .1)';

    return (
      <div 
        style={{color}}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}  
      >
        {this.props.children}
      </div>
    );
  }
}

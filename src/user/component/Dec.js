import React, { Component } from 'react'

export default class Dec extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  hendalcount = () => {
    this.setState({
      count: (this.state.count + 1)
    })
  };

  hendaldec = () => {
    this.setState({
      count: (this.state.count - 1)
    })
  }


  render() {
    return (
      <div>

        <p>you clik {this.state.count}</p>
        <button onClick={this.hendalcount} disabled={this.state.count > 4 ? true : false}>+</button>
        <button onClick={this.hendaldec} disabled={this.state.count === 0 ? true : false}>-</button>
      </div>
    )
  }
}

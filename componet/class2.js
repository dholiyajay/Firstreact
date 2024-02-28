// MyOtherComponent.js
import React, { Component } from 'react';
import MyComponent from './MyComponent';

class MyOtherComponent extends Component {
  render() {
    return (
      <div>
        <div>This is my other component.</div>
        <MyComponent />
      </div>
    );
  }
}

export default MyOtherComponent;
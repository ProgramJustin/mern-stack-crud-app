import React, { Component } from 'react';

class AddItem extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
  }
  render() {
    return (
      <div>
        <h2>Welcome to Add Item</h2>
      </div>
    );
  }
}

export default AddItem;

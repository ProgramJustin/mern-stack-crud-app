import React, { Component } from 'react';

class AddItem extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handSubmit}>
          <label>
            Add Item:
            <input type="text" value={this.state.value} onChange={this.handleChange} className="form-control"/>
          </label><br/>
          <input type="submit" value="submit" className="btn btn-primary"/>
        </form>
      </div>
    );
  }
}

export default AddItem;

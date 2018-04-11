import React, { Component } from 'react';
import ItemService from './ItemService';

class AddItem extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.addItemServcie = new ItemService();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    console.log(ItemService);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
    console.log(this.state);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.addItemServcie.sendData(this.state.value);
    this.props.history.push('/');
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

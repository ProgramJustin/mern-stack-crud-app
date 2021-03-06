import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TableRow extends Component {
  render() {
    return (
      <tr>
      <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
        <td>
          {this.props.obj._id}
        </td>
        <td>
          {this.props.obj.item}
        </td>
        <td>
          <button className="btn btn-danger">Delete</button>
        </td>
      </tr>
    );
  }
}

export default TableRow;

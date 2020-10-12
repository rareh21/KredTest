import React from "react";
import { render } from "react-dom";
import history from '../lib/history';

class Screen2 extends React.Component {
  state = {
    
  };
  
  handleRedirect = () => {
      history.push("/screen1");
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row ">
              <button onClick={this.handleRedirect}> Back </button>
            <div className="col-md-12 column">
              <table
                className="table table-bordered table-hover"
                id="tab_logic"
              >
                <thead>
                  <tr>
                    <th className="text-center"> Name </th>
                    <th className="text-center"> value </th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {this.props.rows.map((item, idx) => (
                    <tr id="addr0" key={idx}>
                      <td>
                        <input
                          type="text"
                          name="name"
                          value={this.props.rows[idx].name}
                          onChange={this.props.handleChange(idx)}
                          className="form-control"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="value"
                          value={this.props.rows[idx].value}
                          onChange={this.props.handleChange(idx)}
                          className="form-control"
                        />
                      </td>
                      <td>
                        <button
                          className="btn btn-outline-danger btn-sm"
                          onClick={this.props.handleRemoveSpecificRow(idx)}
                        >
                          delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button onClick={this.props.handleAddRow} className="btn btn-primary">
                Add Row
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Screen2;
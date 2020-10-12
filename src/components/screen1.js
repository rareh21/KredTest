import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import history from '../lib/history';

class Screen1 extends Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }

    handleOnClick = () => {
       history.push('/screen2');
    }
    render() {
        return(
            <div>
        <div className="container">
          <div className="row ">
            <div className="col-md-12 column">
              <table
                className="table table-bordered table-hover"
                id="tab_logic"
              >
                <thead>
                  <tr>
                    <th className="text-center"> Name </th>
                    <th className="text-center"> value </th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.rows.map((item, idx) => (
                    <tr id="addr0" key={idx}>
                      <td>{this.props.rows[idx].name}</td>
                      <td>{this.props.rows[idx].value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button className="btn btn-primary" onClick={this.handleOnClick}>
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
        );
    }
}

export default Screen1;
import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Screen1 from './screen1';
import screen2 from './screen2';
import Screen2 from './screen2';
import history from '../lib/history';

const routes = [
        {
            path: "/screen1",
            exact: true,
            main: Screen1,
          },
        
          {
            path: "/screen2",
            exact: true,
            main: Screen2,
          },
];
class Header extends Component {
    constructor(props)  {
        super(props);
        this.state={
            rows: [{
                name: '',
                value: ''
            }]
        }
    }
    handleChange = idx => e => {
        const { name, value } = e.target;
        console.log(`name: ${name} & value: ${value}`);
        const rows = [...this.state.rows];
        rows[idx][name] = value;
        this.setState({
          rows
        });
      };

      handleAddRow = () => {
        const item = {
          name: "",
          value: ""
        };
        this.setState({
          rows: [...this.state.rows, item]
        });
      };
      handleRemoveSpecificRow = (idx) => () => {
        const rows = [...this.state.rows]
        rows.splice(idx, 1)
        this.setState({ rows })
      }

    render() {
        console.log(this.state.rows);
        return(
            <React.Fragment>
            <Router history={history}>
                <Switch>
                <Route
                    exact
                    path="/screen1"
                    render={(props) => (
                    <Screen1
                        {...props}
                        rows={this.state.rows}
                    />
                    )}
                />
                <Route
                    exact
                    path="/screen2"
                    render={(props) => (
                    <Screen2
                        {...props}
                        handleChange={this.handleChange}
                        rows={this.state.rows}
                        handleAddRow={this.handleAddRow}
                        handleRemoveSpecificRow={this.handleRemoveSpecificRow}
                    />
                    )}
                />
                </Switch>
            </Router>
        </React.Fragment>
        );
    }
}

export default Header;
import React, { Component } from 'react';
import Header from './components/header';
import history from './lib/history';
import './App.css';
class App extends Component {
    constructor(props) {
        super(props);
        this.state={
          status: false
        }
    }
    handleFirstPage = () => {
      this.setState({
        status: true
      })
      history.push('/screen1');
    }
    render() {
        return(
            <div>
              <div>
                <div className="col-12 style">
                 {
                   !this.state.status &&  <button className="btn btn-primary" onClick={this.handleFirstPage}>Go to see the project</button>
                 }
                </div>
                  <Header />
              </div>
            </div>
        );
    }
}

export default App;
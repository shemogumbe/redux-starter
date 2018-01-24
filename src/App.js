import React, { Component } from 'react';
import './App.css';


import { VoteAngular, VoteReact, VoteVuejs } from './actions/actions';

class App extends Component {
  constructor(props){
    super(props);
    this.store = this.props.store;
  }

  handleVoteAngular = () => {
    this.store.dispatch(VoteAngular());
  }

  handleVoteReact = () => {
    this.store.dispatch(VoteReact());
  }

  handleVoteVuejs= () => {
    this.store.dispatch(VoteVuejs());
  }

  render() {
    return (
      <div className="jumbotron" style={{textAlign: 'center'}}>
        <h2> What is your favorite JS framework</h2>

        <div className="row">
          <div className="col-md-4 col-md-offset-4">
           <img src="https://angular.io/assets/images/logos/angular/angular.png" height="96" alt="Angular" onClick={this.handleVoteAngular}></img>
          </div>

          <div className="col-md-4 col-md-offset-4">
           <img src="https://cdn.worldvectorlogo.com/logos/react.svg" height="96" alt="React" onClick={this.handleVoteReact}></img>
          </div>
          
          <div className="col-md-4 col-md-offset-4">
           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Vue.js_Logo.svg/1000px-Vue.js_Logo.svg.png" height="96" alt="Vuejs" onClick={this.handleVoteVuejs}></img>
          </div>
        </div>
        
      </div>
    

    );
  }
}

export default App;

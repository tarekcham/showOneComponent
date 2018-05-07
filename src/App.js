import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import First from './components/First'
import Second from './components/Second'


class App extends Component {

constructor(props){
        super();
        this.state = {
          showComponent:false
    } 
  }

changeComponentHandler =()=> {
    this.setState(prevState => { return {showComponent: !prevState.showComponent}})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
       <button onClick={this.changeComponentHandler}>Change the Component</button>
       {this.state.showComponent ? <Second/>:<First/>}
      </div>
    );
  }
}

export default App;

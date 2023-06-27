// import logo from './logo.svg';
import './App.css';
import Joke2 from '../components/Joke2.js';
import React from 'react';
import SearchBox from '../components/SearchBox';
import PrintBox from '../components/PrintBox';
import FunSearch from '../components/FunSearch';
import FunPrintBox from '../components/FunPrintBox';
import Joke from '../components/Joke';


// Making a class component

class App extends React.Component {
  // constructor stuff here
  constructor () {
    super()
    this.state = {
      searchField: '',
      funSearchLength: 0
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onFunSearchChange = this.onFunSearchChange.bind(this);
  }

  // making a new method for the class
  handleInputChange(event) {
    this.setState({ searchField: event.target.value });
  }

  onFunSearchChange(event) {
    this.setState({funSearchLength: event.target.value.length})
  }

  // A function to render the page
  render() {
    // const searchField = this.state.searchField;
    {/*Passing a function through to the SearchBox component as a prop*/}
    return (
      <div>
        <SearchBox handleInputChange={this.handleInputChange}/> 
        <PrintBox searchField={this.state.searchField}/><br></br>
        <FunSearch onFunSearchChange={this.onFunSearchChange}/>
        <FunPrintBox funSearchLength={this.state.funSearchLength}/>
        <Joke/>
      </div>
    )

  }

}

export default App;

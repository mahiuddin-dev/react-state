import React from 'react'
import './app-style.css';


class App extends React.Component {

  state = {
    count: 0
  }

  handleIncrement = ()=>{
    this.setState({count: this.state.count + 1})
  }

  handleDecrement = ()=>{
    if(this.state.count > 0) {
      this.setState({count: this.state.count - 1})
      }
  }

  render() {
    return (
      <div className="container">
        <h1> Hello World </h1>
        <h2> Count: {this.state.count} </h2>
        <button onClick={this.handleIncrement} > Count Increment </button>
        <button onClick={this.handleDecrement} >Count Decrement </button>

      </div>
    )
  }
}

export default App
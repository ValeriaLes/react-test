import { Component } from "react";

class Counter extends Component {
  state = {
    value: 0,
  }
  handleIncrement = () => {
    this.setState((prevState) => {
       
        return { value: prevState.value + 1}
    })
  }
  handleDecrement = () => {
    this.setState((prevState) => {
        return { value: prevState.value - 1}
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleIncrement}>+</button>
        <span>{this.state.value}</span>
        <button onClick ={this.handleDecrement}>-</button>
      </div>
    );
  }
}

export default Counter;

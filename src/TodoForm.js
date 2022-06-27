import React, { Component } from "react";
import "./TodoForm.css";

class TodoForm extends Component {
  state = {
    task: "",
  };

  handleChange = (e) => {
    this.setState({ task: e.target.value });
  };

  handleClick = (e) => {
    e.preventDefault();
    this.props.addItem({ id: Math.random() * 1000000, task: this.state.task });
    this.setState({ task: "" });
  };

  render() {
    return (
      <div className="TodoForm">
        <h3>New Todo</h3>
        <form>
          <input
            name="task"
            value={this.state.task}
            onChange={this.handleChange}
          />
          <button onClick={this.handleClick}>ADD TODO</button>
        </form>
      </div>
    );
  }
}
export default TodoForm;

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
    if (this.state.task !== "") {
      this.props.addItem({
        id: Math.random() * 1000000,
        task: this.state.task,
      });
      this.setState({ task: "" });
    }
  };

  render() {
    return (
      <div className="TodoForm">
        <label htmlFor="task">New Todo</label>
        <form>
          <input
            id="task"
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

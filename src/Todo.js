import React, { Component } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { RiPencilFill } from "react-icons/ri";
import "./Todo.css";

class Todo extends Component {
  static defaultProps = {
    item: { id: 1, task: "Do something useful" },
  };

  state = {
    isUpdating: false,
    updatedTask: this.props.item.task,
    isStrike: false,
  };

  handleDelete = (e) => {
    this.props.removeItem(this.props.item.id);
  };

  handleUpdate = (e) => {
    e.preventDefault();
    if (this.state.updatedTask === "") return;
    this.props.updateItem({
      id: this.props.item.id,
      task: this.state.updatedTask,
    });
    this.setState({
      isUpdating: false,
    });
  };

  handleChange = (e) => {
    this.setState({ updatedTask: e.target.value });
  };

  handleStrike = (e) => {
    this.setState((st) => ({ isStrike: !st.isStrike }));
  };

  render() {
    return (
      <div className="Todo">
        {this.state.isUpdating ? (
          <>
            <form onSubmit={this.handleUpdate}>
              <input
                onChange={this.handleChange}
                value={this.state.updatedTask}
              />
              <button>SAVE</button>
            </form>
          </>
        ) : (
          <>
            <span
              className={this.state.isStrike ? "strike" : ""}
              onClick={this.handleStrike}
            >
              {this.state.updatedTask}
            </span>
            <button
              onClick={(e) => {
                this.setState({ isUpdating: true });
              }}
            >
              <RiPencilFill />
            </button>
            <button onClick={this.handleDelete}>
              <MdDeleteOutline />
            </button>
          </>
        )}
      </div>
    );
  }
}
export default Todo;

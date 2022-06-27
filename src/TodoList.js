import React, { Component } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm.js";
import "./TodoList.css";

class TodoList extends Component {
  state = {
    list: [],
  };

  addItem = (item) => {
    this.setState((st) => ({ list: [...st.list, item] }));
  };

  removeItem = (itemId) => {
    this.setState((st) => ({
      list: st.list.filter((item) => item.id !== itemId),
    }));
  };

  updateItem = (itemId, updatedItem) => {
    this.setState((st) => ({
      list: st.list.map((item) => {
        return itemId === item.id ? updatedItem : item;
      }),
    }));
  };

  render() {
    return (
      <div className="TodoList">
        <h1>Todo List!</h1>
        <p>A Simple React Todo List App</p>
        <hr />
        <div className="item-list">
          {this.state.list.map((item) => (
            <Todo
              key={item.id}
              item={item}
              removeItem={this.removeItem}
              updateItem={this.updateItem}
            />
          ))}
        </div>
        <TodoForm addItem={this.addItem} />
      </div>
    );
  }
}
export default TodoList;

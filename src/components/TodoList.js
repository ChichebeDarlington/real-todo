import React, { Component } from "react";
import TodoItems from "./TodoItems";

class TodoList extends Component {
  render() {
    const { items, clearAll, handleDelete, handleEdit } = this.props;
    return (
      <ul className="list-group my-5">
        <h3 className="text-center text-capitalize">todo list section</h3>
        {items.map((item) => {
          return (
            <TodoItems
              key={item.id}
              title={item.title}
              handleDelete={() => handleDelete(item.id)}
              handleEdit={() => handleEdit(item.id)}
            />
          );
        })}
        <button
          style={{ padding: 10, fontSize: 20, background: "crimsom" }}
          className="btn
                 btn-block
                  btn-danger
                   text-capitalize 
                   mt-5
                   "
          onClick={clearAll}
        >
          clear all
        </button>
      </ul>
    );
  }
}

export default TodoList;

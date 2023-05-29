import React, { Component } from "react";

class TodoItems extends Component {
  render() {
    const { title, handleDelete, handleEdit } = this.props;
    return (
      <li
        className="
            list-group-item
            text-capitalize
            d-flex
            justify-content-between
            my-2
            "
        style={{ padding: 20 }}
      >
        <h6 style={{ fontSize: 20 }}>{title}</h6>
        <div className="todo-icon" style={{ display: "flex", gap: 10 }}>
          <span
            className="mx-2 text-success"
            onClick={handleEdit}
            style={{
              fontSize: 15,
              cursor: "pointer",
            }}
          >
            <i className="fas fa-pen"></i>
          </span>
          <span
            className="mx-2 text-danger"
            onClick={handleDelete}
            style={{ fontSize: 15, cursor: "pointer" }}
          >
            <i className="fas fa-trash"></i>
          </span>
        </div>
      </li>
    );
  }
}

export default TodoItems;

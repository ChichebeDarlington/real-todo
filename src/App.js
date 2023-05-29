import React, { Component } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import uuid from "react-uuid";

class App extends Component {
  state = {
    items: [],
    item: "",
    id: uuid(),
    editItem: false,
  };
  handleChange = (event) => {
    this.setState({
      item: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      title: this.state.item,
      id: this.state.id,
    };
    const updatedList = [...this.state.items, newItem];
    this.setState({
      items: updatedList,
      item: "",
      id: uuid(),
      editItem: false,
    });
  };

  clearAll = () => {
    this.setState({
      items: [],
    });
  };

  handleDelete = (id) => {
    const filteredArray = this.state.items.filter((item) => {
      return item.id !== id;
    });
    this.setState({
      items: filteredArray,
    });
  };

  handleEdit = (id) => {
    const foundArray = this.state.items.filter((item) => {
      return item.id !== id;
    });
    const findArray = this.state.items.find((item) => {
      return item.id === id;
    });
    this.setState({
      items: foundArray,
      item: findArray.title,
      editItem: true,
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-uppercase text-center">mazi todo input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              clearAll={this.clearAll}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

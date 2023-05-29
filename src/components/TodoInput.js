import React, { Component } from "react";

class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit} className="">
          <div className="input-group ">
            <div className="input-group-prepend">
              <div
                className="input-group-text
            bg-primary text-white 
            
            "
              >
                <i className="fas fa-book" />
              </div>
            </div>
            <input
              style={{ padding: 15, height: 50, fontSize: 20 }}
              type="text"
              autoFocus={editItem ? "was-validated" : "needs-validated"}
              className="form-control text-capitalize
        mb-3"
              placeholder="add todo here"
              value={item}
              onChange={handleChange}
            />
          </div>
          <button
            style={{ padding: 10, fontSize: 20, background: "blue" }}
            type="submit"
            className={
              editItem
                ? "btn btn-block btn-primary mt-3 text-capitalize"
                : "btn btn-block btn-secondary mt-3 text-capitalize"
            }
          >
            {editItem ? "form edited" : "submit todo"}
          </button>
        </form>
      </div>
    );
  }
}

export default TodoInput;

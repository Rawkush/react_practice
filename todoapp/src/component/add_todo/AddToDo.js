import React, { Component } from "react";
import { Link } from "react-router-dom";
class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.addToList = this.addToList.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      count: 0,
      whatToDo: "",
      notes: "",
      time: "",
      place: "",
      data: {},
      list: [],
    };
  }

  handleSubmit(event) {
    this.addToList();
    event.preventDefault();
  }

  handleChange(event) {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value,
    });
  }

  addToList() {
    //  alert(this.state.notes);
    this.index = this.props.count;
    const todoData = {
      index: this.index,
      whatToDo: this.state.whatToDo,
      place: this.state.place,
      time: this.state.time,
      notes: this.state.notes,
    };
    this.props.addToDoList(todoData);

    //   const newList = this.state.list.concat({ todoData });
    // this.setState({
    //   list: newList,
    // });
    // console.log(this.state.list);
  }

  render() {
    return (
      <div className="parent">
        <div className="container">
          <span>To DO App</span>
          <div className="dataContainer">
            <form className="col-6" onSubmit={this.handleSubmit}>
              <label htmlFor="todo">What to do</label>
              <input
                value={this.state.whatToDo}
                onChange={this.handleChange}
                type="text"
                placeholder="Enter What to do"
                className="form-control"
                id="todo"
                name="whatToDo"
              />
              <label htmlFor="notes">Notes</label>
              <input
                onChange={this.handleChange}
                value={this.state.notes}
                type="text"
                placeholder="Enter Notes"
                className="form-control"
                id="notes"
                name="notes"
              />

              <label htmlFor="time">Time</label>
              <input
                onChange={this.handleChange}
                value={this.state.time}
                type="text"
                placeholder="Enter time"
                className="form-control"
                id="time"
                name="time"
              />
              <label htmlFor="place">Place</label>
              <input
                onChange={this.handleChange}
                value={this.state.place}
                type="text"
                placeholder="Enter place"
                className="form-control"
                id="plcae"
                name="place"
              />

              <button type="submit" className="btn btn-primary">
                ADD
              </button>
            </form>
            <Link to="/list">
              <button type="button" className="btn btn-danger">
                See List
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default AddTodo;

import React, { Component } from "react";
class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0, //* index of the item
      whatToDo: "",
      notes: "",
      time: "",
      place: "",
      list: [],
      modifyIndex: -1,
    };
  }

  componentDidMount = () => {
    if (this.props.location.data !== undefined) {
      this.setState(
        {
          list: this.props.location.data,
          modifyIndex: this.props.location.index,
        },
        () => {
          console.log("add: state after save", this.state.list);
        }
      );
    } else {
      console.log("add: undefined", this.props.history.data);
    }
  };

  handleSubmit = (event) => {
    if (this.state.modifyIndex !== -1) {
      this.addToList(this.state.modifyIndex);
    } else {
      this.addToList(this.state.count);
    }
    event.preventDefault();
  };

  handleChange = (event) => {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value,
    });
  };

  addToList = (myIndex) => {
    const newList = this.state.list.concat({
      index: myIndex,
      whatToDo: this.state.whatToDo,
      place: this.state.place,
      time: this.state.time,
      notes: this.state.notes,
    });
    this.setState(
      {
        list: newList,
        count: this.state.count + 1,
        modifyIndex: -1,
      },
      () => {
        console.log("add: data added");
      }
    );
  };

  gotoListPage = () => {
    this.props.history.push({
      pathname: "/list",
      data: this.state.list,
    });
  };

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

            <button
              type="button"
              onClick={this.gotoListPage}
              className="btn btn-danger"
            >
              See List
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default AddTodo;

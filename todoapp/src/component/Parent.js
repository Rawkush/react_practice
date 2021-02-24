import React, { Component } from "react";
import AddTodo from "./add_todo/AddToDo";
import ListToDo from "./list_todo/ListToDo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
class Parent extends Component {
  constructor(props) {
    super(props);
    this.addDataToList = this.addDataToList.bind(this);
    this.modifyItemInList = this.modifyItemInList.bind(this);
    this.deleteItemFromList = this.deleteItemFromList.bind(this);
    this.state = {
      count: 2,
      modifyIndex: -1,
      list: [
        {
          index: 0,
          whatToDo: "stuff",
          place: "delhi",
          time: "12",
          notes: "notes",
        },
        {
          index: 1,
          whatToDo: "default",
          place: "delhi",
          time: "12",
          notes: "notes",
        },
      ],
    };
  }

  modifyItemInList(index) {
    this.setState({ modifyIndex: index });
  }

  deleteItemFromList(index) {
    const newList = this.state.list.filter((item) => item.index !== index);
    this.setState({
      list: newList,
    });
    console.log("after deleting list is");
    console.log(this.state.list);
  }

  addDataToList = (todoData) => {
    if (this.state.modifyIndex !== -1) {
      console.log("data is modified");
      todoData.index = this.state.modifyIndex;
      this.deleteItemFromList(this.state.modifyIndex);
      this.setState({
        modifyIndexL: -1,
      });
    }
    const newList = this.state.list.concat(todoData);
    this.setState({
      list: newList,
      count: this.state.count + 1,
    });

    console.log(this.state.list);
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/list">
              <ListToDo
                list={this.state.list}
                count={this.state.count}
                deleteData={this.deleteItemFromList}
                modifyData={this.modifyItemInList}
              />
            </Route>
            <Route path="/">
              <AddTodo
                count={this.state.count}
                list={this.state.list}
                addToDoList={this.addDataToList}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default Parent;

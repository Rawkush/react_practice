import React, { Component } from "react";
import AddTodo from "./add_todo/AddToDo";
import ListToDo from "./list_todo/ListToDo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
class Parent extends Component {
  constructor(props) {
    super(props);
    this.callbackFunction = this.callbackFunction.bind(this);
    this.state = {
      list: [
        { whatToDo: "stuff", place: "delhi", time: "12", notes: "notes" },
        { whatToDo: "default", place: "delhi", time: "12", notes: "notes" },
      ],
    };
  }

  callbackFunction = (todoData) => {
    const newList = this.state.list.concat(todoData);
    this.setState({
      list: newList,
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
                parentCallBack={this.callbackFunction}
              />
            </Route>
            <Route path="/">
              <AddTodo
                list={this.state.list}
                parentCallBack={this.callbackFunction}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default Parent;

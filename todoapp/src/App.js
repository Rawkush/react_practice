import "./App.css";
import ListToDo from "./component/list_todo/ListToDo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Component } from "react";
import AddTodo from "./component/add_todo/AddToDo";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={AddTodo}></Route>
            <Route path="/list" exact component={ListToDo}></Route>
            <Route path="/add" exact component={AddTodo}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

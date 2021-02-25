import "./App.css";
import ListToDo from "./component/list_todo/ListToDo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Component } from "react";
import Parent from "./component/Parent";
import AddTodo from "./component/add_todo/AddToDo";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Parent}>
            {/* <ListToDo /> */}
          </Route>

          <Route path="/list" exact component={ListToDo}></Route>
        </Switch>
      </Router>
      // <BrowserRouter>
      //   <Parent />
      // </BrowserRouter>
    );
  }
}

export default App;

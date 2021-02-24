import "./App.css";
import AddTodo from "./component/add_todo/AddToDo";
import ListToDo from "./component/list_todo/ListToDo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/list">
            <ListToDo />
          </Route>
          <Route path="/">
            <AddTodo />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

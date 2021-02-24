import "./App.css";
import AddTodo from "./component/add_todo/AddToDo";
import ListToDo from "./component/list_todo/ListToDo";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Parent from "./component/Parent";

function App() {
  return (
    // <Router>
    //   <div className="App">
    //     <Switch>
    //       <Route path="/list">
    //         <ListToDo />
    //       </Route>
    //       <Route path="/">
    //         <AddTodo />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
    <BrowserRouter>
      <Parent />
    </BrowserRouter>
  );
}

export default App;

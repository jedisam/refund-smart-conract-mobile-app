// import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import EmployeeList from "./components/employee-list.component";
import EditEmployee from "./components/edit-employee.component";
import createEmployee from "./components/create-employee.component";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={EmployeeList} />
      <Route path="/edit/:id" component={EditEmployee} />
      <Route path="/create" component={createEmployee} />
      </div>
    </Router>
  );
}

export default App;

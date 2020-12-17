import './App.css';
import {EmployeePage} from './pages/Employee/employee';
import {WarehousePage} from './pages/warehouse/warehouse';
import { Switch,Route} from 'react-router-dom';
import {Navbar} from './components/Navbar/navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact component={EmployeePage} path='/employee'/>
        <Route exact component={WarehousePage} path='/warehouse'/>
        <Route path='/'/>
      </Switch>
      <div>Hello</div>
    </div>
  );
}

export default App;

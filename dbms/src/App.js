import './App.css';
import {EmployeePage} from './pages/Employee/employee';
import {WarehousePage} from './pages/warehouse/warehouse';
import {NavbarLeft} from './components/Navbar/navbarLeft';
import {NavbarRight} from './components/Navbar/navbarRight';
import { Switch,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavbarLeft/>
      <Switch>
        {/* employee routing */}
        {/* <Route  exact component={EmployeeInsert} path={'/employee/insert'}/>  */}
        {/* <Route  exact component={EmployeeSearch} path={'/employee/search'}/>   */}
        <Route exact component={EmployeePage} path='/employee'/>
        <Route exact component={WarehousePage} path='/warehouse'/>
        {/* <Route path='/'/> */}
      </Switch>
      <NavbarRight/>
    </div>
  );
}

export default App;

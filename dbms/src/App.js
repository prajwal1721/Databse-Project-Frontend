import './App.css';
import {EmployeePage} from './pages/Employee/employee';
import {WarehousePage} from './pages/Warehouse/warehouse';
import {NavbarLeft} from './components/Navbar/navbarLeft';
//import {NavbarRight} from './components/Navbar/navbarRight';
import { Switch,Route} from 'react-router-dom';
import { GoodsPage } from './pages/Goods/goods';

function App() {
  return (
    <div className="App">
      <NavbarLeft/>
      <Switch>
        <Route exact component={EmployeePage} path='/employee'/>
        <Route exact component={GoodsPage} path='/goods'/>
        <Route component={WarehousePage} path='/warehouse'/>
      </Switch>
      {/* <NavbarRight/> */}
    </div>
  );
}

export default App;

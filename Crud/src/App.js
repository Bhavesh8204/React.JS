import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import EmployeList from './Employe-List';
import AddEmploye from './Add-Employe';
import EditEmployeData from './Edit-Employe-Data';
import ViewEmployeData from './View-Employe-Data';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<EmployeList/>}></Route>
        <Route path='/AddEmploye' element={<AddEmploye/>}></Route>
        <Route path='/EditEmploye/:empid' element={<EditEmployeData/>}></Route>
        <Route path='/ViewEmploye/:empid' element={<ViewEmployeData/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

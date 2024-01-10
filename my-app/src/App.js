import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Create from './Create';
import Edit from './Edit';
// import Swarch from './Swarch';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Employelist from './Employelist';
// import AddEmploye from './AddEmploye';
// import EditEmploye from './EditEmploye';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Create' element={<Create/>}></Route>
          <Route path='/Edit/:userid' element={<Edit/>}></Route>
        </Routes>
        {/* <Swarch/> */}
      </BrowserRouter>

      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Employelist />}></Route>
          <Route path='/AddEmploye' element={<AddEmploye/>}></Route>
          <Route path='/EditEmploye/:empid' element={<EditEmploye/>}></Route>
        </Routes>
      </BrowserRouter> */}

    </div>
  );
}

export default App;

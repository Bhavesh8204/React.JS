import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Emploelist from './Emploelist';
import Create from './Create';
import View from './View';
import Edit from './Edit';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Emploelist />}></Route>
          <Route path='/Create' element={<Create />}></Route>
          <Route path='/View/:empid' element={<View/>}></Route>
          <Route path='/Edit/:empid' element={<Edit/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App; 

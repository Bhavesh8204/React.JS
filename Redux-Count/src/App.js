import { createContext } from 'react';
import './App.css';
import { Decrement, Increment } from './Action';
import { useDispatch, useSelector } from 'react-redux';
// import ReduxCount from './Components/Redux-Count';
// import Parent from './Components/Context/Parent';
export const prop = createContext();

function App() {

  const dispatch = useDispatch()
  const counter = useSelector(state => state.count)

  return (
    <div className="App">
      {/* <prop.Provider value={[{prop1:1000,prop2:2000}]}>
        <Parent />
      </prop.Provider> */}
      {/* <ReduxCount/> */}
      <button onClick={() => { dispatch(Decrement()) }}>-</button>
      {counter}
      <button onClick={() => { dispatch(Increment()) }}>+</button>
    </div>
  );
}

export default App;


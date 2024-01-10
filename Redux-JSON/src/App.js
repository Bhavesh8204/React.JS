import { configureStore } from '@reduxjs/toolkit';
import './App.css';
import Products from './Products';
import userReducer from './userReducer';
import { Provider } from 'react-redux';

function App() {

  const store = configureStore({
    reducer: {
      products: userReducer
    }
  })

  return (
    <div className="App">
      <Provider store={store}>
        <Products />
      </Provider>
    </div>
  );
}

export default App;

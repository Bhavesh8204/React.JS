import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';
import bhavesh from './bhavesh.jpg'
import Yagneshpractice from './yagneshpractice'
import Yagneshpractice1 from './yagneshpractice1'
import Person from './person'

function App() {
   
  const obj = {name: 'Alice', age: 29, country: 'Austria'};

const [name,setName] = useState("yagnesh")

  return (
    <div className="App">
      {/* <Header/> */}
      {/* <img src={bhavesh}/> */}
      {/* <Content/> */}
      <Yagneshpractice/>

     <Yagneshpractice1 changename={name}>
      
      </Yagneshpractice1>
      <Person data={obj} />


    </div>
  );
}

export default App;

 import React from "react";
 
 
 function Person({data}) {
    return (
      <div>
        <h2>{data.name}</h2>
        <h2>{data.age}</h2>
        <h2>{data.country}</h2>
      </div>
    );
  }
  export default Person
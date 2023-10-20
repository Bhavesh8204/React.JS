import React, { useEffect, useState } from 'react';
import Data from './Data.json';
function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Use the fetch function to make an HTTP GET request
    fetch(Data)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error('Fetch error:', error);
      });
  }, []); // Empty dependency array to run the effect once when the component mounts

  return (
    <div>
      <h1>Fetch API Example</h1>
      {data ? (
        <div>
          <h2>Fetched Data:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default MyComponent;

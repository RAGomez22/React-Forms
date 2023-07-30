import React, { useState, useEffect } from 'react';

export default function MyComponent() {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup');
        const result = await response.json();
        console.log(result);
        setResponse(result);
      } catch (error) {
        console.error(error);
        // Handle error
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      {/* Render your component JSX */}
      {/* You can access properties of the response using response.propertyName */}
    </div>
  );
}

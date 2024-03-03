import React, { useState, useEffect } from 'react';

function DogBreedsComponent() {
  const [breeds, setBreeds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/list/all');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        // Transform the object into an array of breed names
        setBreeds(Object.keys(data.message));
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBreeds();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Dog Breeds</h1>
      <ul>
        {breeds.map(breed => (
          <li key={breed} data-testid={`breed-name-${breed}`}>{breed}</li>
        ))}
      </ul>
    </div>
  );
}

export default DogBreedsComponent;

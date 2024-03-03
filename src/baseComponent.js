import React, { useState, useEffect } from 'react';

function BaseComponent() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1 className='posts-header' data-testid='posts-header-text'>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id} data-testid={`post-number-${post.id}`}>
            <strong>{post.title}</strong>
            <p className='post-body' >{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BaseComponent;

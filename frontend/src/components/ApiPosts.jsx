import React, { useEffect, useState } from "react";

export default function ApiPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => setPosts(data))
      .catch((err) => setError(err.message || "Failed to fetch"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p className="error">Error: {error}</p>;

  return (
    <div className="card">
      <h2>Fetched Posts (title, body, userId)</h2>
      <div className="posts-grid">
        {posts.map((post) => (
          <div className="post-card" key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <small>User ID: {post.userId}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

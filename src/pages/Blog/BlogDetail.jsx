import React from 'react';
import { Link } from 'react-router-dom';

const Blog = ({ blogs }) => {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {blogs && blogs.map(blog => (
          <li key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;

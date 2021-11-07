import React from 'react';

const BlogPosts = ({ loading, posts }) => {
  return <>{loading ? <p>Loading...</p> : <p>Got our blog posts</p>}</>;
};

export default BlogPosts;

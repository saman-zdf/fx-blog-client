import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BlogPosts from './components/BlogPosts';
import { getBlogPost } from './services/blogPostServices';
import { GlobalStyle } from './styled/globalStyled';

const App = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBlogPost()
      .then((posts) => setBlogPosts(posts))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<BlogPosts loading={loading} posts={blogPosts} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

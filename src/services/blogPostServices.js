import posts from '../data/posts';

export const getBlogPost = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(posts);
    }, 2000);
  });
};

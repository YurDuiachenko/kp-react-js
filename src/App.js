import React, { useState } from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Aside from './components/aside/Aside';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [archivedPosts, setArchivedPosts] = useState([]);

  const handleCreatePost = (post) => {
    setPosts([...posts, post]);
  };

  const handleDeletePost = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  const handleArchivePost = (postTitle) => {
    const archivedPost = posts.find((post) => post.title === postTitle);
    setArchivedPosts([...archivedPosts, archivedPost.title]);
    setPosts(posts.filter((post) => post.title !== postTitle));
  };

  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <Main
          posts={posts}
          onDeletePost={handleDeletePost}
          onArchivePost={handleArchivePost}
        />
        <Aside
          onCreatePost={handleCreatePost}
          archivedPosts={archivedPosts}
        />
      </div>
      <footer className='footer'> Курсовая работа по JS</footer>
    </div>
  );
}

export default App;

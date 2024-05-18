import React from 'react';
import './Posts.css';
import Post from './Post';

const Posts = ({posts, onDeletePost, onArchivePost}) => {
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          onDeletePost={onDeletePost}
          onArchivePost={onArchivePost}
        />
      ))}
    </div>
  );
};

export default Posts;

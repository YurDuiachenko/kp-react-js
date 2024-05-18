import React from 'react';
import './Post.css';
import Button from "../../common/button/Button";

const Post = ({post, onDeletePost, onArchivePost}) => {
  return (
    <article className="post">
      <h3>{post.title}</h3>
      <p className="post-category">Категория: {post.category}</p>
      <p className="post-author">Автор: {post.author}</p>
      <p className="post-content">{post.content}</p>
      <div className="post-buttons">
        <Button
          text="Удалить"
          className="delete-button"
          onClick={() => onDeletePost(post.id)}
        />
        <Button
          text="Архив"
          className="archive-button"
          onClick={() => onArchivePost(post.title)}
        />
      </div>
    </article>
  );
};

export default Post;
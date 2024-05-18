import React from 'react';
import './Main.css';
import Title from "../common/title/Title";
import Posts from './posts/Posts';
import Card from '../common/card/Card';

const Main = ({posts, onDeletePost, onArchivePost}) => {
  return (
    <Card>
      <Title title="Записи"/>
      <Posts
        posts={posts}
        onDeletePost={onDeletePost}
        onArchivePost={onArchivePost}
      />
    </Card>
  );
};

export default Main;

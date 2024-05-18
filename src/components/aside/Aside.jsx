import React from 'react';
import Form from './form/Form';
import Archive from './archive/Archive';
import './Aside.css';
import Card from "../common/card/Card";

const Aside = ({onCreatePost, archivedPosts}) => {
  return (
    <aside className="aside-container">
      <Card>
        <Form onCreatePost={onCreatePost}/>
        <Archive archivedPosts={archivedPosts}/>
      </Card>
    </aside>
  );
};

export default Aside;

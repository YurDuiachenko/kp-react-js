import React from 'react';
import './Archive.css';
import Title from "../../common/title/Title";

const Archive = ({ archivedPosts }) => {
  return (
    <div className="archive">
      <Title title="Архив"/>
      <ol className="archive-list">
        {archivedPosts.map((postTitle, index) => (
          <li key={index} className="archive-item">
            {postTitle}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Archive;
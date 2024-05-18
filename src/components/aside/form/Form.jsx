import React, {useState} from 'react';
import './Form.css';
import Title from "../../common/title/Title";
import TextInput from "../../common/input/TextInput";
import Button from "../../common/button/Button";

const Form = ({onCreatePost}) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      category,
      author,
      content,
    };
    onCreatePost(newPost);
    setTitle('');
    setCategory('');
    setAuthor('');
    setContent('');
  };

  return (
    <div>
      <Title title="Создать запись"/>
      <form onSubmit={handleSubmit}>
        <TextInput
          id="title"
          label="Заголовок"
          value={title}
          onChange={setTitle}
        />
        <TextInput
          id="category"
          label="Категория"
          value={category}
          onChange={setCategory}
        />
        <TextInput
          id="author"
          label="Автор"
          value={author}
          onChange={setAuthor}
        />
        <div className="form-group">
          <label htmlFor="content">Содержание</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <Button text="Создать" className="create-button"/>
        </div>
      </form>
    </div>
  );
};

export default Form;

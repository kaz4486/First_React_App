import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import styles from './CardForm.module.scss';

const CardForm = (props) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.action({ title: title }, props.columnId);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.row}>
      {/* prettier-ignore */}
      <TextInput
          type='text'
          value={title}
          onChange={e=> setTitle(e.target.value)}
        />
      <Button>Add Title</Button>
    </form>
  );
};

export default CardForm;

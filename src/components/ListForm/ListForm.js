import { useState } from 'react';
import { addList } from '../../redux/listsRedux';
import styles from './ListForm.module.scss';
import { useDispatch } from 'react-redux';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const ListForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addList({ title, description }));
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.row}>
      Title:
      {/* prettier-ignore */}
      <TextInput
          type='text'
          value={title}
          onChange={e=> setTitle(e.target.value)}
        />
      Description:
      {/* prettier-ignore */}
      <TextInput
          type='text'
          value={description}
          onChange={e=> setDescription(e.target.value)}
        />
      <Button>Add list</Button>
    </form>
  );
};

export default ListForm;

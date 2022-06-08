import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchedText, modifyTextSearch } from '../../redux/store';

const SearchForm = () => {
  const [searchText, setSearchText] = useState('');
  const modifiedSearchText = useSelector((state) => getSearchedText(state));

  //Mamy więc dwa wyjścia. Musimy zadbać o to, aby <SearchForm> zawsze pokazywał w inpucie zawartość state.searchString, albo state.searchString musi być zerowany przy inicjacji <SearchForm>. Wybierz jedną z tych dwóch dróg i napraw <SearchForm>.

  const dispatch = useDispatch();
  //dispatch(modifyTextSearch(searchText));

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(modifyTextSearch(searchText));
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput
        placeholder='Search...'
        type='text'
        onChange={(e) => setSearchText(e.target.value)}
        value={searchText}
        //value={modifiedSearchText}
      />
      <Button>
        <span className='fa fa-search' />
      </Button>
    </form>
  );
};

export default SearchForm;

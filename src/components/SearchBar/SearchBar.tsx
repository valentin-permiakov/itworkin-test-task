import React, { ChangeEvent, useEffect, useState } from 'react';
import styles from './searchbar.module.css';
import { EIcons, Icon } from '../../icons/Icon';
import { useAppDispatch } from '../../store/hooks';
import { searchByName } from '../../store/dataSlice';

type SearchBarProps = {};

const SearchBar: React.FC<SearchBarProps> = () => {
  const [inputText, setInputText] = useState('');
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(searchByName(inputText.trim()));
  }, [inputText]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };
  return (
    <div className={styles.searchContainer}>
      <div className={styles.iconContainer}>
        <Icon
          name={EIcons.searchIcon}
          size={16}
        />
      </div>
      <input
        type='text'
        name='name'
        placeholder='Search name...'
        className={styles.searchInput}
        value={inputText}
        onChange={handleChange}
      />
    </div>
  );
};
export default SearchBar;

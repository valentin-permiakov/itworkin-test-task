import React from 'react';
import { useAppSelector } from '../../../store/hooks';
import styles from './entryCount.module.css';

type EntryCountProps = {};

const EntryCount: React.FC<EntryCountProps> = () => {
  const { data, itemsPerPage, startIndex } = useAppSelector(
    (state) => state.dataSlice
  );
  return (
    <span className={styles.entryCount}>
      {startIndex + 1}-{startIndex + itemsPerPage} of {data.length}
    </span>
  );
};
export default EntryCount;

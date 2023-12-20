import React from 'react';
import PageSwitcher from './PageSwitcher/PageSwitcher';
import PaginationChoice from './PaginationChoice/PaginationChoice';
import styles from './pagination.module.css';
import EntryCount from './EntryCount/EntryCount';

type PaginationProps = {};

const Pagination: React.FC<PaginationProps> = () => {
  return (
    <div className={styles.pagination}>
      <EntryCount />
      <div>
        <PaginationChoice />
        <PageSwitcher />
      </div>
    </div>
  );
};
export default Pagination;

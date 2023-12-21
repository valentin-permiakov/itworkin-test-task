import React from 'react';
import { setCurrentPage } from '../../../store/dataSlice';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import styles from './paginationSwitcher.module.css';
import { EIcons, Icon } from '../../../icons/Icon';

type PageSwitcherProps = {};

const PageSwitcher: React.FC<PageSwitcherProps> = () => {
  const dataSlice = useAppSelector((state) => state.dataSlice);
  const dispatch = useAppDispatch();

  const changePage = (dirNum: number) => {
    dispatch(setCurrentPage(dirNum));
  };
  return (
    <div className={styles.btnContainer}>
      <button
        onClick={() => changePage(-1)}
        disabled={dataSlice.currentPage === 1}
        className={styles.pageBtn}
      >
        <Icon
          name={EIcons.pageArrowIcon}
          size={16}
        />
      </button>
      <div>
        {dataSlice.currentPage}
        <span className={styles.totalPages}>/{dataSlice.totalPages}</span>
      </div>

      <button
        onClick={() => changePage(1)}
        disabled={dataSlice.currentPage === dataSlice.totalPages}
        className={`${styles.pageBtn} ${styles.pageRight}`}
      >
        <Icon
          name={EIcons.pageArrowIcon}
          size={16}
        />
      </button>
    </div>
  );
};
export default PageSwitcher;

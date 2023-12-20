import React, { MouseEvent, useState } from 'react';
import { changeItemsPerPage } from '../../../store/dataSlice';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import styles from './paginationChoice.module.css';
import { useCoordinates } from '../../../utils/useCoordinates';
import Dropdown from '../../Dropdown/Dropdown';
import { Icon, EIcons } from '../../../icons/Icon';

type PaginationChoiceProps = {};

const paginationChoice = [2, 4, 6, 8, 10];

const PaginationChoice: React.FC<PaginationChoiceProps> = () => {
  const [isOpened, setIsOpened] = useState(false);
  const { btnRef, top, left } = useCoordinates(0, 0);
  const dispatch = useAppDispatch();
  const maxItems = useAppSelector((state) => state.dataSlice.itemsPerPage);
  const handleClick = async (e: MouseEvent<HTMLLIElement>) => {
    if (e.currentTarget.dataset.page) {
      dispatch(changeItemsPerPage(Number(e.currentTarget.dataset.page)));

      setIsOpened(false);
    }
  };
  return (
    <div className={styles.dropDownContainer}>
      <span className={styles.choiceLabel}>Rows per page: </span>
      <button
        onClick={() => setIsOpened(!isOpened)}
        ref={btnRef}
        className={styles.choiceBtn}
      >
        {maxItems}
        <Icon
          name={EIcons.dropdownIcon}
          size={16}
        />
      </button>
      {isOpened && (
        <Dropdown
          top={top}
          left={left}
        >
          <ul onMouseLeave={() => setIsOpened(false)}>
            {paginationChoice.map((item) => (
              <li
                data-page={item}
                onClick={handleClick}
                key={item}
              >
                {item}
              </li>
            ))}
          </ul>
        </Dropdown>
      )}
    </div>
  );
};
export default PaginationChoice;

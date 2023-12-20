import React, { useState, MouseEvent } from 'react';
import requestData from '../../api/requestData';
import { changeUrl, changeIsLoading } from '../../store/apiSlice';
import { updateData } from '../../store/dataSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import styles from './apiChoice.module.css';
import { useCoordinates } from '../../utils/useCoordinates';
import Dropdown from '../Dropdown/Dropdown';
import { EIcons, Icon } from '../../icons/Icon';

type ApiChoiceProps = {};

const ApiChoice: React.FC<ApiChoiceProps> = () => {
  const [isOpened, setIsOpened] = useState(false);
  const { btnRef, top, left } = useCoordinates(0, 55);
  const dispatch = useAppDispatch();
  const choiceName = useAppSelector((state) => state.apiChoice.name);
  const handleClick = async (e: MouseEvent<HTMLLIElement>) => {
    if (e.currentTarget.dataset.type) {
      dispatch(changeUrl(e.currentTarget.dataset.type));
      try {
        dispatch(changeIsLoading(true));
        const data = await requestData(e.currentTarget.dataset.type);
        if (!data) return;
        dispatch(updateData(data));
      } catch (error) {
        console.log(error);
      }
      dispatch(changeIsLoading(false));
      setIsOpened(false);
    }
  };
  return (
    <div className={styles.dropDownContainer}>
      <span className={styles.choiceLabel}>Api choice: </span>
      <button
        onClick={() => setIsOpened(!isOpened)}
        ref={btnRef}
        className={styles.choiceBtn}
      >
        {choiceName}
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
            <li
              data-type='character'
              onClick={handleClick}
            >
              Characters
            </li>
            <li
              data-type='location'
              onClick={handleClick}
            >
              Locations
            </li>
          </ul>
        </Dropdown>
      )}
    </div>
  );
};
export default ApiChoice;

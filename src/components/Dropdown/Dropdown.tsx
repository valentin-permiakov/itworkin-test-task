import React, { MouseEvent, useState } from 'react';
import requestData from '../../api/requestData';
import { changeIsLoading, changeUrl } from '../../store/apiSlice';
import { updateData } from '../../store/dataSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

type DropdownProps = {};

const Dropdown: React.FC<DropdownProps> = () => {
  const [isOpened, setIsOpened] = useState(false);
  const dispatch = useAppDispatch();
  const choiceName = useAppSelector((state) => state.apiChoice.name);
  const handleClick = async (e: MouseEvent<HTMLLIElement>) => {
    if (e.currentTarget.dataset.type) {
      dispatch(changeUrl(e.currentTarget.dataset.type));
      try {
        dispatch(changeIsLoading(true));
        const data = await requestData(e.currentTarget.dataset.type);
        dispatch(updateData(data.results));
      } catch (error) {
        console.log(error);
      }
      dispatch(changeIsLoading(false));
      setIsOpened(false);
    }
  };
  return (
    <div>
      <button onClick={() => setIsOpened(!isOpened)}>{choiceName}</button>
      {isOpened && (
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
      )}
    </div>
  );
};
export default Dropdown;

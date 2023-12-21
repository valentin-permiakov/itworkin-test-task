import React, { useState } from 'react';
import styles from './tableHeader.module.css';
import { useAppDispatch } from '../../../store/hooks';
import { DataKeys, sortByProperty } from '../../../store/dataSlice';
import { EIcons, Icon } from '../../../icons/Icon';

type TableHeaderProps = {
  columnKeys: Array<DataKeys>;
};

const TableHeader: React.FC<TableHeaderProps> = ({ columnKeys }) => {
  const dispatch = useAppDispatch();
  const initialSortOrders = Object.fromEntries(
    columnKeys.map((key) => [key, 'asc'])
  );
  const [sortOrders, setSortOrders] = useState(initialSortOrders);

  const handleSortClick = (property: DataKeys) => {
    const newSortOrder = sortOrders[property] === 'asc' ? 'desc' : 'asc';

    setSortOrders((prevSortOrders) => ({
      ...prevSortOrders,
      [property]: newSortOrder,
    }));

    dispatch(sortByProperty([property, newSortOrder]));
  };
  return (
    <thead className={styles.thead}>
      <tr className={styles.headerRow}>
        {columnKeys.map((key, index) => (
          <th
            key={index}
            className={styles.headerCell}
            onClick={() => handleSortClick(key)}
          >
            {key}
            <Icon
              name={EIcons.sortIcon}
              size={16}
            />
          </th>
        ))}
      </tr>
    </thead>
  );
};
export default TableHeader;

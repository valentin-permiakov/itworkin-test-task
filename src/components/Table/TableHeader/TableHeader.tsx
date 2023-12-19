import React from 'react';
import styles from './tableHeader.module.css';

type TableHeaderProps = {
  columnKeys: Array<string>;
};

const TableHeader: React.FC<TableHeaderProps> = ({ columnKeys }) => {
  return (
    <thead>
      <tr className={styles.headerRow}>
        {columnKeys.map((key, index) => (
          <th
            key={index}
            className={styles.headerCell}
          >
            {key}
          </th>
        ))}
      </tr>
    </thead>
  );
};
export default TableHeader;

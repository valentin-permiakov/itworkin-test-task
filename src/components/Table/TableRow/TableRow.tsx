import React from 'react';
import { DataObject } from '../../../store/dataSlice';
import TableCell from '../TableCell/TableCell';
import { isValidUrl } from '../../../utils/isValidUrl';
import styles from './tableRow.module.css';

type TableRowProps = {
  data: DataObject;
};

const TableRow: React.FC<TableRowProps> = ({ data }) => {
  const values: Array<string> = [];
  Object.values(data).forEach((value) => {
    if (typeof value === 'string' || typeof value === 'number') {
      values.push(String(value));
    } else if (Array.isArray(value)) {
      values.push(value[0]);
    } else {
      values.push(value.name);
    }
  });
  return (
    <tr className={styles.tableRow}>
      {values.map((value, index) => (
        <TableCell
          key={index}
          content={value}
          isLink={isValidUrl(value)}
        />
      ))}
    </tr>
  );
};
export default TableRow;

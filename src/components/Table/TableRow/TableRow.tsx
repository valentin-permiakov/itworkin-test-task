import React from 'react';
import { ParsedDataObj } from '../../../api/requestData';
import { isValidUrl } from '../../../utils/isValidUrl';
import TableCell from '../TableCell/TableCell';
import styles from './tableRow.module.css';

type TableRowProps = {
  data: ParsedDataObj;
};

const TableRow: React.FC<TableRowProps> = ({ data }) => {
  const values: Array<string | number> = Object.values(data);

  return (
    <tr className={styles.tableRow}>
      {values.map((value, index) => (
        <TableCell
          key={index}
          content={String(value)}
          isLink={isValidUrl(String(value))}
        />
      ))}
    </tr>
  );
};
export default TableRow;

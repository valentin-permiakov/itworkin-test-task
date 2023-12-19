import React from 'react';
import styles from './tableCell.module.css';

type TableCellProps = {
  content: string;
  isLink: boolean;
};

const TableCell: React.FC<TableCellProps> = ({ content, isLink }) => {
  return (
    <td className={styles.cell}>
      {isLink ? (
        <a
          href={content}
          className={styles.link}
        >
          {content}
        </a>
      ) : (
        content || 'No data'
      )}
    </td>
  );
};
export default TableCell;

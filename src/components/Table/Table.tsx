import React, { useEffect, useState } from 'react';
import TableHeader from './TableHeader/TableHeader';
import TableBody from './TableBody/TableBody';
import { DataObject } from '../../store/dataSlice';
import styles from './table.module.css';

type TableProps = {
  data: Array<DataObject>;
};

const Table: React.FC<TableProps> = ({ data }) => {
  const [columnKeys, setColumnKeys] = useState(['']);
  useEffect(() => {
    if (data.length > 0) {
      setColumnKeys(Object.keys(data[0]));
    }
  }, [data]);

  if (data.length === 0) {
    return <p>no data</p>;
  }

  return (
    <table className={styles.table}>
      <TableHeader columnKeys={columnKeys} />
      <TableBody data={data} />
    </table>
  );
};
export default Table;

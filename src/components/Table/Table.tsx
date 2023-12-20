import React, { useEffect, useState } from 'react';
import { ParsedDataObj } from '../../api/requestData';
import TableBody from './TableBody/TableBody';
import TableHeader from './TableHeader/TableHeader';
import styles from './table.module.css';
import { DataKeys } from '../../store/dataSlice';

type TableProps = {
  data: Array<ParsedDataObj>;
};

const Table: React.FC<TableProps> = ({ data }) => {
  const [columnKeys, setColumnKeys] = useState<Array<DataKeys>>();
  useEffect(() => {
    if (data.length > 0) {
      const keyArr: DataKeys[] = Object.keys(data[0]) as Array<DataKeys>;
      setColumnKeys(keyArr);
    }
  }, [data]);

  if (data.length === 0) {
    return <p>no data</p>;
  }

  if (!columnKeys) return <p>no data</p>;

  return (
    <table className={styles.table}>
      <TableHeader columnKeys={columnKeys} />
      <TableBody data={data} />
    </table>
  );
};
export default Table;

import React from 'react';
import TableRow from '../TableRow/TableRow';
import { DataObject } from '../../../store/dataSlice';

type TableBodyProps = {
  data: Array<DataObject>;
};

const TableBody: React.FC<TableBodyProps> = ({ data }) => {
  return (
    <tbody>
      {data.map((obj, index) => (
        <TableRow
          key={index}
          data={obj}
        />
      ))}
    </tbody>
  );
};
export default TableBody;

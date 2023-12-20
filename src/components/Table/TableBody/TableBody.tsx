import React from 'react';
import { ParsedDataObj } from '../../../api/requestData';
import TableRow from '../TableRow/TableRow';

type TableBodyProps = {
  data: Array<ParsedDataObj>;
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

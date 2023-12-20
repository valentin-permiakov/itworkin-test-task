import React from 'react';

type DropdownIconProps = {
  width: number;
  height: number;
};

const DropdownIcon: React.FC<DropdownIconProps> = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='down'>
        <path
          id='icon'
          d='M5 6.5L8 9.5L11 6.5'
          stroke='#868FA0'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
    </svg>
  );
};
export default DropdownIcon;

import React from 'react';

type PageArrowIconProps = {
  width: number;
  height: number;
};

const PageArrowIcon: React.FC<PageArrowIconProps> = ({ width, height }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 16 16'
      fill='none'
    >
      <path
        d='M9.5 11L6.5 8L9.5 5'
        stroke=''
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
export default PageArrowIcon;

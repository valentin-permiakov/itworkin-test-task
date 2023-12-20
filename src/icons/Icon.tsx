import React from 'react';
import DropdownIcon from './DropdownIcon';
import PageArrowIcon from './PageArrowIcon';

export enum EIcons {
  dropdownIcon = 'DropdownIcon',
  pageArrowIcon = 'PageArrowIcon',
}

interface IIconProps {
  name: EIcons;
  size?: number;
}

export const Icon = ({ name, size = 16 }: IIconProps) => {
  const icons = {
    DropdownIcon: (
      <DropdownIcon
        width={size}
        height={size}
      />
    ),
    PageArrowIcon: (
      <PageArrowIcon
        width={size}
        height={size}
      />
    ),
  };
  return <span style={{ width: size, height: size }}>{icons[name]}</span>;
};

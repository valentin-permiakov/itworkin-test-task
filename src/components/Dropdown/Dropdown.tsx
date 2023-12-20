import React from 'react';
import ReactDOM from 'react-dom';
import styles from './dropdown.module.css';

type DropdownProps = { children: React.ReactNode; top: number; left: number };

const Dropdown: React.FC<DropdownProps> = ({ children, top, left }) => {
  const node = document.getElementById('dropdown-root');

  if (!node) return null;

  return ReactDOM.createPortal(
    <div
      className={styles.container}
      style={{
        top: top,
        left: left,
      }}
    >
      {children}
    </div>,
    node
  );
};
export default Dropdown;

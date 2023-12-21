import React from 'react';
import styles from './skeleton.module.css';

type SkeletonProps = {};

const Skeleton: React.FC<SkeletonProps> = () => {
  return <div className={styles.skeletonTable}></div>;
};
export default Skeleton;

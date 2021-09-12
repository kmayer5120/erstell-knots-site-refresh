import React from 'react';
import classNames from 'classnames';
import './styles.scss';

const Row = ({ children, className }) => {
  const getClasses = ()=> (classNames('row', className))

  return <div className={getClasses()}>{children}</div>;
};

export default Row;

import React from 'react';
import classNames from 'classnames';
import './styles.scss';

const Col = ({ span, children }) => {
  const getClasses = () => {
    return classNames('col', span && `col-${span}`);
  };

  return <div className={`${getClasses()}`}>{children}</div>;
};

export default Col;

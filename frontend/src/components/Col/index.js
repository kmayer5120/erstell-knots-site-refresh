import React from 'react';
import classNames from 'classnames';
import './styles.scss';

const Col = ({ span, children, className }) => {
  const getClasses = () => {
    return classNames('col', span && `col-${span}`, className);
  };

  return <div className={`${getClasses()}`}>{children}</div>;
};

export default Col;

import React from 'react';
import classnames from 'classnames';

const Container = ({ children, fullSize, className }) => {
  const getClasses = () =>
    classnames('container', fullSize && 'container--full-size', className);

  return <div className={getClasses()}>{children}</div>;
};

export default Container;

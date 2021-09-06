import React from 'react';
import classnames from 'classnames';

const Container = ({ children, fullSize, ...classNames }) => {
  const getClassnames = () => {
    return classnames('container', fullSize && '--full-size', classNames);
  };

  return <div className={getClassnames()}>{children}</div>;
};

export default Container;

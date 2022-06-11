import React from 'react';
// import * as S from './style';
import PropTypes from 'prop-types';

const Icon = ({ src, size = 20, alt }) => {
  const iconStyle = {
    width: typeof size === 'string' ? size : `${(size / 8).toFixed(2)}rem`,
    height: typeof size === 'string' ? size : `${(size / 8).toFixed(2)}rem`,
  };

  return (
    <div>
      <img src={src} alt={alt} style={{ ...iconStyle }} />
    </div>
  );
};

Icon.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  alt: PropTypes.string.isRequired,
};

export default Icon;

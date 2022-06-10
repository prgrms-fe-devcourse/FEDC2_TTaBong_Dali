import React from 'react';
// import * as S from './style';
import PropTypes from 'prop-types';

// Icon

const Icon = ({ src, size = 20, alt, color }) => {
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
  size: PropTypes.number,
};

export default Icon;

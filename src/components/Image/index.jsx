import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';

const Image = ({ src, width, height, alt, mode = 'fill' }) => {
  const imageStyle = {
    width,
    height,
    objectFit: mode, // cover, fill, contain
    borderRadius: '10px',
  };

  return <img src={src} alt={alt} style={{ ...imageStyle }} />;
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  alt: PropTypes.string.isRequired,
  mode: PropTypes.string,
};

export default Image;

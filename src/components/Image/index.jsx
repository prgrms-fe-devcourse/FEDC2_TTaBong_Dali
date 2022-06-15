import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';

const Image = ({ src, width, height, alt, mode = 'fill' }) => {
  return (
    <S.Image src={src} alt={alt} width={width} height={height} mode={mode} />
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  alt: PropTypes.string.isRequired,
  mode: PropTypes.string,
};

export default Image;

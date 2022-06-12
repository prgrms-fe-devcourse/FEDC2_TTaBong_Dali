import React from 'react';
// import * as S from './style';
import PropTypes from 'prop-types';
import IconList from '../../assets/icons';

const Icon = ({ name = 'listFill', size = 20, alt = '리스트 아이콘' }) => {
  const iconStyle = {
    height: typeof size === 'string' ? size : `${(size / 8).toFixed(2)}rem`,
    width: typeof size === 'string' ? size : `${(size / 8).toFixed(2)}rem`,
  };

  return (
    <div>
      <img src={IconList[name]} style={{ ...iconStyle }} alt={alt} />
    </div>
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  alt: PropTypes.string,
};

export default Icon;

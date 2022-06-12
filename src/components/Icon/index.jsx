import React from 'react';
// import * as S from './style';
import PropTypes from 'prop-types';
import IconList from '../../assets/icons';

const Icon = ({
  icon = 'ranking',
  type = 'Line',
  size = 20,
  alt = 'default-icon',
}) => {
  const iconStyle = {
    height: typeof size === 'string' ? size : `${(size / 8).toFixed(2)}rem`,
    width: typeof size === 'string' ? size : `${(size / 8).toFixed(2)}rem`,
  };

  const src =
    icon === 'TTaBong' ? IconList.TTaBong : IconList[`${icon}${type}`];

  return (
    <div>
      <img src={src} alt={alt} style={{ ...iconStyle }} />
    </div>
  );
};

Icon.propTypes = {
  icon: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  alt: PropTypes.string,
};

export default Icon;

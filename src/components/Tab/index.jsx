import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './style';

export const TabItem = ({ children, active = false, onClick }) => {
  return (
    <S.TabItemWrapper active={active} onClick={onClick}>
      {children}
    </S.TabItemWrapper>
  );
};

TabItem.propTypes = {
  active: PropTypes.bool,
  // eslint-disable-next-line react/no-unused-prop-types
  __TYPE: PropTypes.oneOf(['Tab.Item']),
};

TabItem.defaultProps = {
  __TYPE: 'Tab.Item',
};

const childrenToArray = (children, types) => {
  return React.Children.toArray(children).filter((elem) => {
    if (React.isValidElement(elem) && types.includes(elem.props.__TYPE)) {
      return true;
    }

    console.warn(
      `Onle accepts ${
        Array.isArray(types) ? types.join(',') : types
      } as its children`,
    );

    return false;
  });
};

export const Tab = ({ children, activeIndex = 0 }) => {
  const [currentActive, setCurrentActive] = useState(() => {
    if (activeIndex >= 0) {
      return activeIndex;
    }

    return 0;
  });

  const items = useMemo(() => {
    return childrenToArray(children, 'Tab.Item').map((elem, index) => {
      return React.cloneElement(elem, {
        ...elem.props,
        active: index === currentActive,
        onClick: () => {
          setCurrentActive(index);
        },
      });
    });
  }, [children, currentActive]);

  return <S.TabItemContainer>{items}</S.TabItemContainer>;
};

Tab.propTypes = {
  activeIndex: PropTypes.number,
};

export default Tab;

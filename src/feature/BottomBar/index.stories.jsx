import React from 'react';
import BottomBar from '.';
import listFillIcon from '../../assets/icon_list_fill.svg';
import rankingLineIcon from '../../assets/icon_ranking_line.svg';
import searchLineIcon from '../../assets/icon_search_line.svg';
import userLineIcon from '../../assets/icon_user_line.svg';
import TTaBongIcon from '../../assets/TTaBong_white.svg';

export default {
  title: 'Feature/BottomBar',
  component: BottomBar,
  argTypes: {
    iconList: {
      defaultValue: [
        listFillIcon,
        rankingLineIcon,
        searchLineIcon,
        userLineIcon,
      ],
    },
    TTaBongIcon: {
      defaultValue: TTaBongIcon,
    },
  },
};

export function Default(args) {
  return <BottomBar {...args} />;
}

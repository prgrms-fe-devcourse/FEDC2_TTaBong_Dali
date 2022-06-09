const theme = {
  colors: {
    // 하늘색, 노란색, 무채색, 특정페이지 색
    black: '#000000',
    white: '#FFFFFF',
    skyblue: ['#7EC9FF', '#BFE4FF'],
    yellow: ['#FFDD85', '#FFF8E7'],
    red: '#FD3535',
    darkgray: ['#3F3F3F', '#4A4A4A'],
    gray: ['#D9D9D9', '#ECECEC'],
    // 버튼 별 gradient
    praise: ['#7C89FF', '#95E6FF'],
    moved: ['#FFA0A0', '#FFF7B3'],
    warm: ['#FF93C0', '#FFC0C0'],
    // hover 색
    skyblueHover: '#4AB3FF',
    yellowHover: '#FFBE5C',
    // 특정페이지색 - 메달
    bronze: ['#E4B368', '#F9D59F'],
    silver: ['#BEBEBE', '#DCDCDC'],
  },
  spacing: ['8px', '16px', '24px', '32px', '40px'],
  size: {
    mobile: '(max-width: 600px)',
    tablet: '(max-width: 900px)',
    desktop: '(min-width: 1200px)',
  },
};

export default theme;

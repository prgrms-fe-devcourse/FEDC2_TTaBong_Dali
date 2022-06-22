export const getHexToRgb = (hex) => {
  const [r, g, b] = [
    parseInt(hex.substr(1, 2), 16),
    parseInt(hex.substr(3, 2), 16),
    parseInt(hex.substr(5, 2), 16),
  ];

  return [r, g, b];
};

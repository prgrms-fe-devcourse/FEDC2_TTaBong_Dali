const DATE_ONE_HOUR = 3600000;
const DATE_ONE_DAY = DATE_ONE_HOUR * 24;

export const getDayString = (diffTime, createdTime) => {
  let dayString = '';
  if (diffTime < DATE_ONE_DAY) {
    const countHours = Math.floor(diffTime < 0 ? 0 : diffTime / DATE_ONE_HOUR);
    dayString += `${countHours} 시간`;
  } else {
    const date = new Date(createdTime);

    dayString += `${date.getMonth() + 1}월 `;
    dayString += `${date.getDate()}일 `;
    dayString += `${date.getHours()}:${date.getMinutes()} `;
  }

  return dayString;
};

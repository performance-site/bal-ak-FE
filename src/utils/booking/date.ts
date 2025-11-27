export const formatToMonthDayWeek = (isoString?: string) => {
  if (!isoString) return '';

  const date = new Date(isoString);

  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  const week = ['일', '월', '화', '수', '목', '금', '토'];
  const weekDay = week[date.getDay()];

  return `${month}/${day}(${weekDay})`;
};

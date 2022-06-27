const addZeroIfOneDigit = (num: number): string => {
  return num < 10 ? `0${num}` : `${num}`;
};
export const formatDate = (date: string): string => {
  const formatDate = new Date(date);
  const returnDate = `${addZeroIfOneDigit(
    formatDate.getDate()
  )}/${addZeroIfOneDigit(
    formatDate.getMonth() + 1
  )}/${formatDate.getFullYear()} ${addZeroIfOneDigit(
    formatDate.getHours()
  )}:${addZeroIfOneDigit(formatDate.getMinutes())}:${addZeroIfOneDigit(
    formatDate.getSeconds()
  )}`;
  return returnDate;
};

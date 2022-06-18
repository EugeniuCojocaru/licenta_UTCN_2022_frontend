export const validateResponseStatus = (
  responseStatus: number | undefined
): boolean => {
  if (responseStatus) {
    if (responseStatus >= 200 && responseStatus <= 299) return true;
  }
  return false;
};

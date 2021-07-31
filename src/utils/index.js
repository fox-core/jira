export const cleanObject = (object) => {
  const result = { ...object };
  Object.keys(result).map((item) => {
    if (!result[item]) {
      delete result[item];
    }
    return true;
  });
  return result;
};

export const range = (from, to) => {
  const result = [];
  for (let index = from; index <= to; index++) {
    result.push({
      value: index,
      text: index
    });
  }

  return result;
};

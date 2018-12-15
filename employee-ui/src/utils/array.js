export const range = (from, to, isReversed) => {
  let result = [];

  if (isReversed) {
    for (let index = from; index >= to; index--) {
      result.push({
        value: index,
        text: index
      });
    }
  } else {
    for (let index = from; index <= to; index++) {
      result.push({
        value: index,
        text: index
      });
    }
  }

  return result;
};

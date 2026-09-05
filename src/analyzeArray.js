function getAverage(array) {
  return array.reduce((previous, current) => previous + current) / getLength(array);
}

function getLength(array) {
  return array.length;
}

export function analyzeArray(array) {
  array.sort((a, b) => a - b);
  let average = getAverage(array);
  let min = array[0];
  let max = array.at(-1);
  let length = getLength(array);

  return { average, min, max, length };
}

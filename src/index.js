
exports.min = function min (array) {  
  if (Array.isArray(array) && array.length) {
    return Math.min(...array);
  }
  return 0;
}

exports.max = function max (array) {
  if (Array.isArray(array) && array.length) {
    return Math.max(...array);
  }
  return 0;
}

exports.avg = function avg (array) {
  if (Array.isArray(array) && array.length) {
    return array.reduce( (acc, el) => acc + el, 0) / array.length;
  }
  return 0;
}

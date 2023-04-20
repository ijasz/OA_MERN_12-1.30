const sum = (...arr) => {
  let s = 0;
  for (const i of arr) {
    s += i;
  }

  return s;
};

module.exports.sum = sum;

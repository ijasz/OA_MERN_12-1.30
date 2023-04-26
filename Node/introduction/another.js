const name = "arthi";
const age = 20;

const sum = (...arr) => {
  let s = 0;
  for (const i of arr) {
    s += i;
  }

  return s;
};

module.exports = {
  name: name,
  age: age,
  sum: sum,
};

// module.exports.name = name;
// module.exports.age = age;
// module.exports.sum = sum;

var fruit = {
  apple: 20,
  pear: 20,
  peach: 10
};
fruit.count = function() {
  let total = 0;
  for (let key in this) {
    if (typeof(this[key]) === "number") {
      total += this[key];
    }
  }
  return total;
}
console.log(fruit.count())
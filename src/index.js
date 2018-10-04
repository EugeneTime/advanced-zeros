module.exports = function getZerosCount(number, base) {
  let result = number;
  let baseSystem = base;

  for (let i = 2; i <= baseSystem; i++) {

    let multipliers = 0;
    while (baseSystem % i === 0) {
      baseSystem = Math.floor(baseSystem / i); 
      multipliers++;
    }

    let zeros = 0;
    let count = number;
    while (count / i > 0) {
      zeros += Math.floor(count / i); 
      count = Math.floor(count / i);
    }

    result = Math.floor(Math.min(result, zeros / multipliers));
  }

  return result;
}
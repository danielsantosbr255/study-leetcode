/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {
  return async function (...args) {
    const limited = new Promise((_, reject) => setTimeout(() => reject("Time Limit Exceeded"), t));
    return Promise.race([fn(...args), limited]);
  };
};

const fn = async (n) => {
  await new Promise((res) => setTimeout(res, 100));
  return n * n;
};

const inputs = [5];
const t = 150;
const start = performance.now();
const limited = timeLimit(fn, t);
let result;

try {
  const res = await limited(...inputs);
  result = { resolved: res, time: Math.floor(performance.now() - start) };
} catch (err) {
  result = { rejected: err, time: Math.floor(performance.now() - start) };
}
console.log(result); // Output

// The provided function is set to resolve after 100ms. However, the time limit is set to 50ms. It rejects at t=50ms because the time limit was reached.

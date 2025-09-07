var TimeLimitedCache = function () {
  this.cache = new Map();
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  let existsKey = this.cache.has(key);
  if (existsKey) clearTimeout(this.cache.get(key).timeOut);

  this.cache.set(key, {
    value,
    timeOut: setTimeout(() => this.cache.delete(key), duration),
  });

  return existsKey;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  return this.cache.has(key) ? this.cache.get(key).value : -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  return this.cache.size;
};

const timeLimitedCache = new TimeLimitedCache();
console.log(timeLimitedCache.set(1, 42, 100)); // false
console.log(timeLimitedCache.get(1)); // 42
console.log(timeLimitedCache.count()); // 1

/**
 * 数値配列を昇順にソートする
 * @param {number[]} arr - 数値の配列
 * @returns {number[]} ソート後の配列
 */
function sortNumbers(arr) {
  return [...arr].sort((a, b) => a - b);
}

/**
 * 数値配列を降順にソートする
 * @param {number[]} arr - 数値の配列
 * @returns {number[]} ソート後の配列
 */
function sortNumbersDesc(arr) {
  return [...arr].sort((a, b) => b - a);
}

/**
 * 配列を指定した条件でフィルタリングする
 * @param {Array} arr - 任意の配列
 * @param {Function} callback - コールバック関数 (要素, インデックス, 配列) を引数に取り、true を返したものだけ残す
 * @returns {Array} フィルタリング後の配列
 */
function filterArray(arr, callback) {
  return arr.filter(callback);
}

/**
 * 配列を指定した関数で変換する
 * @param {Array} arr - 任意の配列
 * @param {Function} callback - コールバック関数 (要素, インデックス, 配列) を引数に取り、変換後の要素を返す
 * @returns {Array} 変換後の配列
 */
function mapArray(arr, callback) {
  return arr.map(callback);
}

/**
 * 配列内の最大値を求める
 * @param {number[]} arr - 数値の配列
 * @returns {number} 最大値
 */
function maxOfArray(arr) {
  return Math.max(...arr);
}

/**
 * 配列内の最小値を求める
 * @param {number[]} arr - 数値の配列
 * @returns {number} 最小値
 */
function minOfArray(arr) {
  return Math.min(...arr);
}

/**
 * 数値配列の合計を求める
 * @param {number[]} arr - 数値の配列
 * @returns {number} 配列内の合計
 */
function sumOfArray(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0);
}

/**
 * 配列から条件を満たす最初の要素を探す
 * @param {Array} arr - 任意の配列
 * @param {Function} predicate - コールバック関数 (要素, インデックス, 配列) を引数に取り、true を返した要素を返す
 * @returns {*} 条件を満たす最初の要素。見つからなければ undefined。
 */
function findInArray(arr, predicate) {
  return arr.find(predicate);
}

// ===== 使い方テストコード =====

const nums = [5, 2, 9, 1, 7];

console.log('--- sortNumbers ---');
console.log(sortNumbers(nums)); // [1, 2, 5, 7, 9]

console.log('--- sortNumbersDesc ---');
console.log(sortNumbersDesc(nums)); // [9, 7, 5, 2, 1]

console.log('--- filterArray ---');
console.log(filterArray(nums, n => n > 5)); // [9, 7]

console.log('--- mapArray ---');
console.log(mapArray(nums, n => n * 2)); // [10, 4, 18, 2, 14]

console.log('--- maxOfArray ---');
console.log(maxOfArray(nums)); // 9

console.log('--- minOfArray ---');
console.log(minOfArray(nums)); // 1

console.log('--- sumOfArray ---');
console.log(sumOfArray(nums)); // 24

console.log('--- findInArray ---');
console.log(findInArray(nums, n => n % 2 === 0)); // 2

/**
 * 文字列を指定の区切り文字で分割して配列にする
 * @param {string} str - 入力文字列
 * @param {string} delimiter - 区切り文字（例: " ", ","）
 * @returns {string[]} 分割された文字列の配列
 */
function splitString(str, delimiter = ' ') {
  return str.split(delimiter);
}

/**
 * 文字列の配列を指定の区切り文字で結合して1つの文字列にする
 * @param {string[]} arr - 文字列の配列
 * @param {string} delimiter - 結合時の区切り文字（例: " ", ","）
 * @returns {string} 結合された文字列
 */
function joinStrings(arr, delimiter = ' ') {
  return arr.join(delimiter);
}

/**
 * 文字列を1文字ずつ配列に分解し、各文字のUnicodeコードを返す
 * @param {string} str - 入力文字列
 * @returns {number[]} 各文字のUnicodeコードの配列
 */
function stringToCharCodes(str) {
  const codes = [];
  for (let i = 0; i < str.length; i++) {
    codes.push(str.charCodeAt(i));
  }
  return codes;
}

/**
 * 文字列を逆順にして返す
 * @param {string} str - 入力文字列
 * @returns {string} 逆順になった文字列
 */
function reverseString(str) {
  return str.split('').reverse().join('');
}

/**
 * 文字列の文字を昇順にソートして返す
 * @param {string} str - 入力文字列
 * @returns {string} ソートされた文字列
 */
function sortString(str) {
  return str.split('').sort().join('');
}

/**
 * 部分文字列が文字列内に含まれているかどうかを判定する
 * @param {string} str - 探索対象の文字列
 * @param {string} pattern - 探す部分文字列
 * @returns {boolean} 含まれていれば true、含まれていなければ false
 */
function includesSubstring(str, pattern) {
  return str.indexOf(pattern) !== -1;
}

/**
 * 1文字が大文字かどうかを判定する関数
 * @param {string} char - 1文字の文字列
 * @returns {boolean} 大文字なら true、そうでなければ false
 */
function isUpperCase(char) {
  return char === char.toUpperCase() && char !== char.toLowerCase();
}


// ====== 使い方テストコード（console.logで確認できる） ======

console.log('--- splitString ---');
console.log(splitString("a,b,c", ",")); // ["a", "b", "c"]
console.log(splitString("hello world")); // ["hello", "world"]

console.log('--- joinStrings ---');
console.log(joinStrings(["a", "b", "c"], ",")); // "a,b,c"
console.log(joinStrings(["hello", "world"])); // "hello world"

console.log('--- stringToCharCodes ---');
console.log(stringToCharCodes("ABC")); // [65, 66, 67]

console.log('--- reverseString ---');
console.log(reverseString("abc")); // "cba"

console.log('--- sortString ---');
console.log(sortString("dcba")); // "abcd"

console.log('--- includesSubstring ---');
console.log(includesSubstring("hello world", "world")); // true
console.log(includesSubstring("hello", "abc")); // false

console.log('--- isUpperCase ---');
console.log(isUpperCase("A")); // true
console.log(isUpperCase("a")); // false
console.log(isUpperCase("1")); // false

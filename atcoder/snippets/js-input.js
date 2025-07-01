
/**
 * 1行の文字列から1つの数値を取得する関数
 * @param {string} input - 改行を含む入力文字列（例: "17\n"）
 * @returns {number} パースされた数値
 */
function inputSingleNum(input) {
    const args = input.split("\n");
    const n = parseInt(args[0], 10);
    console.log(args); // ["17"]
    console.log(n);    // 17
}

/**
 * 1行の文字列から、スペース区切りの2つの数値を取得する関数
 * @param {string} input - 改行を含む入力文字列（例: "3 4\n"）
 * @returns {void}
 */
function inputArrayNum(input) {
  const args = input.split('\n');
  const nums = args[0].split(' ');
  const a = parseInt(nums[0], 10);
  const b = parseInt(nums[1], 10);

  console.log(args); // [ '3 4', '' ]
  console.log(nums); // [ '3', '4' ]
  console.log(a); // 3
  console.log(b); // 4
}

/**
 * 1行目に件数、2行目にスペース区切りの数値配列を取得する関数
 * @param {string} input - 改行を含む入力文字列（例: "4\n2 1 4 8\n"）
 * @returns {void}
 */
function inputNumAndArrayNum(input) {
  const args = input.split("\n");
  const n = parseInt(args[0], 10);
  const a = args[1].split(" ").map((n) => parseInt(n, 10));

  console.log(args); // [ '4', '2 1 4 8' ]
  console.log(n); // 4
  console.log(a); // [ 2, 1, 4, 8 ]
}

/**
 * 改行ごとに数値を取得する関数
 * @param {string} input - 改行を含む入力文字列（例: "5\n1\n0\n20\n"）
 * @returns {void}
 */
function inputMultiRowNum(input) {
  const args = input.split("\n");
  const A = parseInt(args[0], 10);
  const B = parseInt(args[1], 10);
  const C = parseInt(args[2], 10);
  const X = parseInt(args[3], 10);

  console.log(A); // 5
  console.log(B); // 1
  console.log(C); // 0
  console.log(X); // 20
}

/**
 * 1行目に件数、2行目以降に1行ずつ数値を受け取る関数
 * @param {string} input - 改行を含む入力文字列（例: "4\n10\n8\n8\n6\n"）
 * @returns {void}
 */
function inputNumAndMultiRowNum(input) {
  const args = input.split('\n');
  const N = parseInt(args[0], 10);
  const nums = args.slice(1, args.length - 1).map((n) => parseInt(n, 10));

  console.log(args); // ["4", "10", "8", "8", "6"]
  console.log(N); // 4
  console.log(nums); // [10, 8, 8, 6]
}


// atCoderでインプットを受け取るおまじない
main(require("fs").readFileSync("/dev/stdin", "utf8"));
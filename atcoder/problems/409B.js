//累積和

/**
 * 配列 arr の累積和を計算する関数
 * @param {number[]} arr - 数値の配列
 * @returns {number[]} 累積和配列（sum[i] は arr の 0〜i-1 までの合計、sum[0] = 0）
 */
function prefixSum(arr) {
  const sum = new Array(arr.length + 1).fill(0);
  for (let i = 0; i < arr.length; i++) {
    sum[i + 1] = sum[i] + arr[i];
  }
  return sum;
}
/**
 * 区間和を求める関数（[l, r) の区間和）
 * @param {number[]} sum - prefixSumで作成した累積和配列
 * @param {number} l - 区間の開始インデックス（含む）
 * @param {number} r - 区間の終了インデックス（含まない）
 * @returns {number} 区間和
 */
function rangeSum(sum, l, r) {
  return sum[r] - sum[l];
}

function Main(input) {
  const args = input.split("\n");
  const n = parseInt(args[0], 10);
  const d = args[1].split(" ").map((n) => parseInt(n, 10));
  
  const prefixSumArr = prefixSum(d);
  
  //区間和をそれぞれ出力する
  for (let i = 0; i < n -1; i++) {
    const distances = [];
    // j は i より後の駅のインデックス
    for(let j = i+1; j < n; j++) {
      distances.push(rangeSum(prefixSumArr, i, j));
    }
    console.log(distances.join(' '));
  }
  

}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
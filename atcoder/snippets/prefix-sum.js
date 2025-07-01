// 累積和

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

// 使い方例
const arr = [1, 2, 3, 4, 5];
const sum = prefixSum(arr);
console.log(sum)
console.log(rangeSum(sum, 1, 4)); // 2 + 3 + 4 = 9 計算は10 - 1 = 9
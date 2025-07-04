/**
 * ソート済み配列 arr から target を二分探索で探す関数
 * @param {number[]} arr - 昇順にソートされた数値配列
 * @param {number} target - 探したい値
 * @returns {number} target のインデックス。見つからなければ -1 を返す
 */
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    // 中間インデックスを計算
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // 見つかった場合
    } else if (arr[mid] < target) {
      left = mid + 1; // 探索範囲を右半分に絞る
    } else {
      right = mid - 1; // 探索範囲を左半分に絞る
    }
  }

  return -1; // 見つからなかった場合
}

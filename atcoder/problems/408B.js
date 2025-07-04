// inputに入力データ全体が入る
function Main(input) {
  const args = input.split("\n");
  const n = parseInt(args[0], 10);
  const a = args[1].split(" ").map((n) => parseInt(n, 10));
  
  const uniqueArr = [...new Set(a)];

	console.log(uniqueArr.length);
	console.log(uniqueArr.sort((a, b) => a - b).join(' '));
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8")); // これは必ず必要な呪文です
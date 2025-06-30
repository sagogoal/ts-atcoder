// inputに入力データ全体が入る
function Main(input) {
	const result = input.split("\n"); // 入力データに必要な処理を加える

	// 問題を解決するための処理を書く

	console.log(result); // 処理結果を出力する　※return resultではありません！
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8")); // これは必ず必要な呪文です
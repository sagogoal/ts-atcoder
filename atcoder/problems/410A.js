function Main(input) {
	const args = input.split("\n");
	const N = parseInt(args[0])
	const A = args[1].split(" ").map((n) => parseInt(n, 10)); //連続する文字を配列に数値型で格納
	const K = parseInt(args[2])
	
	
	let ans = 0;
	for (let i = 0; i < N; i++){
	  if (A[i] >= K){
	    ans++;
	  }
	}
  console.log(ans)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
function Main(input) {
	const args = input.split("\n");
	const N = parseInt(args[0])
	const T = args[1]
	const A = args[2]
	
	
	for (let i = 0; i < N; i++){
	  if (A[i] == "o" & T[i] == "o"){
	    console.log("Yes");
	    return;
	  }
	}
  console.log("No")
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
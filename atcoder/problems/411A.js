function Main(input) {
	const result = input.split("\n");
	const P = result[0];
	const  L = parseInt(result[1]);
	
	if (P.length >= L) {
	    console.log("Yes");
	} else {
	    console.log("No")
	}
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
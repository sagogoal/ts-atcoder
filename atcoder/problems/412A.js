function Main(input) {
    const args = input.split("\n");
    const N = parseInt(args[0], 10);
    const nums = args.slice(1, N + 1).map((n) => n.split(" "));
    const A = nums.map((n) => parseInt(n[0], 10));
    const B = nums.map((n) => parseInt(n[1], 10));
  
      let ans = 0;
      for (let i = 0; i < N; i++) {
        if (A[i] < B[i]){
          ans++;
        }
      }
    console.log(ans)
  }
  Main(require("fs").readFileSync("/dev/stdin", "utf8"));
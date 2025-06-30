function Main(input) {
    const args = input.split('\n');
    const nums = args[0].split(' ');
    const N = parseInt(nums[0], 10);
    const S = parseInt(nums[1], 10);
    const T = args[1].split(" ").map((n) => parseInt(n, 10));
      
      if (T[0] > S + 0.5) {
        console.log("No");
        return;
      }
      for (let i = 0; i < N-1; i++){
        if (T[i+1] - T[i] > S + 0.5 ){
          console.log("No");
          return;
        }
      }
    console.log("Yes")
  }
  Main(require("fs").readFileSync("/dev/stdin", "utf8"));
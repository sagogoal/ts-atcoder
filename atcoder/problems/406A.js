function Main(input) {
    const args = input.split('\n');
    const nums = args[0].split(' ');
    const a = parseInt(nums[0], 10);
    const b = parseInt(nums[1], 10);
    const c = parseInt(nums[2], 10);
    const d = parseInt(nums[3], 10);
  
    if (a > c) {
        console.log("Yes")
    } else if (a === c) {
      if (b > d) {
        console.log("Yes")
      } else {
          console.log("No")
      }
    } else {
        console.log("No")
      }
  }
  Main(require("fs").readFileSync("/dev/stdin", "utf8"));
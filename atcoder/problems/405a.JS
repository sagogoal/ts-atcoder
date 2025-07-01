function Main(input) {
    const args = input.split('\n');
    const nums = args[0].split(' ');
    const r = parseInt(nums[0], 10);
    const x = parseInt(nums[1], 10);
  
    if (x === 1) {
        if (1600 <= r & r <= 2999) {
          console.log("Yes")
        } else {
            console.log("No")
        }
    } else if (x === 2) {
           if (1200 <= r & r <= 2399) {
          console.log("Yes")
        } else {
            console.log("No")
        }
    }
  }
  Main(require("fs").readFileSync("/dev/stdin", "utf8"));
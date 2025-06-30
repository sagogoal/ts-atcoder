function Main(input) {
    const args = input.split('\n');
    const nums = args[0].split(' ');
    const A = parseInt(nums[0], 10);
    const B = parseInt(nums[1], 10);
  
      let a = A / B;
    console.log(Math.round(a))
  }
  Main(require("fs").readFileSync("/dev/stdin", "utf8"));

//文字が大文字か小文字か判別する関数　大文字と小文字に変換して、それがどっちと一致するかで判別可能。
function isUpperCase(char) {
    return char === char.toUpperCase() && char !== char.toLowerCase();
  }
  
  function Main(input) {
    const args = input.split("\n");
    const S = args[0];
    const T = args[1];
  
    for (let i = 1; i < S.length; i++) {
      if (isUpperCase(S[i])) {
        if (T.includes(S[i-1])){
        } else {
            console.log("No")
            return
        }
      }
    }
    console.log("Yes")
  
  }
  Main(require("fs").readFileSync("/dev/stdin", "utf8"));
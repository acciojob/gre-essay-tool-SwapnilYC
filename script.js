//your code here
let str;
document.getElementById("evaluatedText").value = ""; // initially string is empty so count is also empty

document.addEventListener("keyup", function () {
  str = document.getElementById("evaluatedText").value; //here this value will return string
  document.querySelector("#wordCount").textContent = str.length;
    // console.log(str);
});

// function handle() {
//   let count = document.getElementById("evaluatedText").value; //here this value will return string
//   console.log(count);
//   document.querySelector("#letterCount").textContent = count.length;
// }
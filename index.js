arr = document.querySelectorAll(".buttons");

// for (let index = 0; index < arr.length; index++) {
//   document
//     .querySelectorAll(".buttons")
//     [index].addEventListener("click", function () {
//       list = [];
//       list.push(123);
//       document.querySelector(".hello").innerHTML = list;
//     });
// }
list = [];
for (let index = 0; index < arr.length; index++) {
  document
    .querySelectorAll(".buttons")
    [index].addEventListener("click", function () {
      if (arr[index].innerHTML == 1) {
        list.push(1);
      } else if (arr[index].innerHTML == 2) {
        list.push(2);
      } else if (arr[index].innerHTML == 3) {
        list.push(3);
      } else if (arr[index].innerHTML == 4) {
        list.push(4);
      } else if (arr[index].innerHTML == 5) {
        list.push(5);
      } else if (arr[index].innerHTML == 6) {
        list.push(6);
      } else if (arr[index].innerHTML == 7) {
        list.push(7);
      } else if (arr[index].innerHTML == 8) {
        list.push(8);
      } else if (arr[index].innerHTML == 9) {
        list.push(9);
      } else if (arr[index].innerHTML == 0) {
        list.push(0);
      } else if (arr[index].innerHTML == "+") {
        list.push("+");
      } else if (arr[index].innerHTML == "-") {
        list.push("-");
      } else if (arr[index].innerHTML == "*") {
        list.push("*");
      } else if (arr[index].innerHTML == "/") {
        list.push("/");
      } else if (arr[index].innerHTML == ".") {
        list.push(".");
      } else if (arr[index].innerHTML == "B") {
        list.pop();
      }

      if (list.length < 17) {
        str = list.toString();
      }

      console.log(str);
      sts = "";
      for (i = 0; i < str.length; i++) {
        if (str[i] != ",") {
          sts += str[i];
        }
      }

      if (arr[index].innerHTML == "C") {
        list = [];
        sts = "";
      } else if (arr[index].innerHTML == "=") {
        sts = eval(sts);
        list = [sts];
      }
      console.log(sts);
      document.querySelector(".hello").innerHTML = sts;
    });
}

console.log(eval("2*5+5+68/8-84*54/4-4+59"));

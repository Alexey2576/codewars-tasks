let input = document.querySelector("input");
let button = document.querySelector("button");

let obj = [
  {name: 'Vasya', age: 4},
  {name: 'Murka', age: 1.5},
  {name: 'Varna', age: 21},
  {name: 'Kesha', age: 3},
];

let num = [2, 45, 546, 1, 665645, 3, 56];

let a = "1";
let b = "2";
let c = a;
a = b;
b = c;
console.log(a); // то что было изначально в b
console.log(b); // то что было изначально в a

button.addEventListener("click", function () {
  let message = input.value;
  setTimeout(() => {
      let text = " " + obj[0].name + " " + superSum(1, 2) + " " + findMax(num);
      if (message === "google")
        alert("Yandex круче. Но это не точно" + text);
      else
        alert(message + text);
    }, 3000)
  }
);

superSum = (a, b) => {
  return a + b;
}

findMax = (array) => {
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (max < array[i]) max = array[i];
  }
  return max;
}

findMin = (array) => {
  let min = array[0];
  for (let i = 0; i < array.length; i++) {
    if (min > array[i]) min = array[i];
  }
  return min;
}

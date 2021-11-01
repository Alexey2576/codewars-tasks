//return the total number of smiling faces in the array
function countSmileys(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(":") || arr[i].includes(";")) {
        if (arr[i].length === 3) {
          if (arr[i].includes("-") || arr[i].includes("~")) {
            if (arr[i].includes(")") || arr[i].includes("D")) {
              count++;
            }
          }
        }
        else if (arr[i].length === 2) {
          if (arr[i].includes(")") || arr[i].includes("D")) {
            count++;
          }
        }
    }
  }
  return console.log(count);
}

countSmileys([':D',':~)',';~D',':)']);
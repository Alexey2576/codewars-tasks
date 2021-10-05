function digital_root(n) {
  let strNum = String(n);
  let result = strNum;
  while (result > 9 ) {
    result = 0;
    for (let i = 0; i < strNum.length; i++)
      result += Number(strNum[i]);
    if (result > 9)
      strNum = String(result)
  }
  return result;
}
console.log(digital_root(458));

// var strNum = prompt("Введите число", "");
// var result = 0;
//
// // Простой вариант, если число в виде строки
// for (var i = 0; i < strNum.length; i++)
//   result += Number(strNum[i]);
//
// console.log(result);
//
// // Вариант с числами
// var nums = prompt("Введите число", "");
// var length = nums.length;      // Количество цифр
// nums = Number(nums);           // Переводим строку в число
//
// var temp = 0;                  // Для хранения цифр
// var result = 0;                // Конечный результат
//
// for (var i = 0; i < length; i++) {
//   temp = nums % 10;            // Сохраняем цифру в переменной
//   result += temp;              // Складываем цифры числа
//   nums = parseInt(nums /10);   // Переходим к следующей цифре в числе
// }
//
//
// console.log(result);
//

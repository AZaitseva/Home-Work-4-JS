// console.log

// Задание 1
function task_1() {
  let x1 = +prompt("Введите значение первого числа для сравнения: ");
  let y1 = +prompt("Введите значение второго числа для сравнения: ");
   sum(x1, y1);
function sum(x1,y1) {
 if (x1 < y1){
     alert("-1");
  }
  if (x1 > y1){
    alert("1");
 }
 if (x1 == y1) {
     alert("0");
   }
}
}
task_1();

// Задание 2
function task_2() {
  let n = prompt("Введите число, для вычисления факториала! ");
  let f = n;
  function factorial(f) {
    return (f != 1) ? f * factorial(f - 1) : 1;
  }
    alert( factorial(n) );
}
task_2();

// Задание 3
function task_3() {
let a = prompt("Для составления числа введите первeую цифру: ");
let b = prompt("Введите вторую цифру: ");
let c = prompt("Введите третью цифру: ");
let sum = a + b + c;
  alert("Получилось число: " + sum);
}
task_3();

// Задание 4
function task_4() {
let d = prompt("Введите длину прямоугольника d: ");
let e = prompt("Введите ширину прямоугольника e: ");
function s(d,e){
if (d !='' && e !='')
return (d * e);
else if (d !='' && e=='')
return (d * d);
else if (d =='' && e!='')
return (e*e);
}
console.log(s(d,e));
alert("Площадь прямоугольника равна: " + s(d,e));

}
task_4();

// Задание 4 (2 вариант)
// function task_4_1() {
// function check(d,e = 0) {
//   if(e == 0) { return d**2; }
//   return d*e;
//   }
//   /* тесты: */
//   console.log(check(2));
//   console.log(check(2,4));
// }
// task_4_1();

// Задание 5
function task_5() {
//let number = prompt("Введите число для определения, является ли оно совершенным: ");
function is_perfect(number) {
  let j = 0;
     for(let i = 1; i <= number/2; i++) {
           if(number %i === 0) {
              j += i;
            }
       }
    
       if(j === number && j !== 0) {
         alert("Это совершенное число.");
          }  
        else {
         alert("Это не совершенное число.");
          }  
   }
  is_perfect(28);
  
}
task_5();

// Задание 6
function task_6() {
let from = +prompt("Введите начало диапазона для определения совершенных чисел: ");
let to = +prompt("Введите конец диапазона:")
function getPerfect(from, to) {
  let res = [];
  for (let i = from; i < to; i++) {
    sum = 0;
    for (let j = 1; j <= i/2; j++) {
      if (i % j === 0) sum += j;
    }
    if (i === sum) res.push(i);
  }
  return res;
}
//console.log(getPerfect(1, 800));
document.body.innerText = getPerfect(1, 800);
//alert(`В диапазоне чисел ${from} - ${to} совершенные числа: ${getPerfec(from, to)}`);
}
task_6();

// Задание 7
function task_7() {
  function Time(a, b = 0, c = 0) {
    if (a < 10) {
      a = "0" + a;
    }
    if (b < 10) {
      b = "0" + b;
    }
    if (c < 10) {
      c = "0" + c;
    }
    return `${a}:${b}:${c}`;
  }

  let x = 0;
  let y = 0;
  let z = 0;

  do {
    x = Math.abs(Math.ceil(+prompt("Введите часы от 0 до 23: ")));
    y = Math.abs(Math.ceil(+prompt("Введите минуты от 0 до 59: ")));
    z = Math.abs(Math.ceil(+prompt("Введите секунды от 0 до 59: ")));
  } while (x > 23 || y > 59 || z > 59);

  alert("Текущее время: " + Time(x, y, z));
}
task_7();


// Задание 8
function task_8() {
  function TimeToSec(a, b = 0, c = 0) {
    let TimeToSec = a * 3600 + b * 60 + c;
    return TimeToSec;
  }
  
  let x = 0;
  let y = 0;
  let z = 0;

  do {
    x = Math.abs(Math.ceil(+prompt("Введите часы от 0 до 23: ")));
    y = Math.abs(Math.ceil(+prompt("Введите минуты от 0 до 59: ")));
    z = Math.abs(Math.ceil(+prompt("Введите секунды от 0 до 59: ")));
  } while (x > 23 || y > 59 || z > 59);

  alert(
    "От начала суток это составляет " + TimeToSec(x, y, z) + " секунд."
  );
}

task_8();


// Задание 9
function task_9() {
  function SecToTime(a) {
    let hours = Math.trunc(a / 3600);
    let minutes = Math.trunc((a - hours * 3600) / 60);
    let sec = Math.trunc(a - hours * 3600 - minutes * 60);

    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (sec < 10) {
      sec = "0" + sec;
    }
    let current_time = `${hours}:${minutes}:${sec}`;
    return current_time;
  }

  let input_sec = 0;
  do {
    input_sec = Math.abs(
      Math.trunc(+prompt("Введите секунды для перевода их в текущее время: "))
    );
  } while (input_sec != +input_sec);

  alert(SecToTime(input_sec));
}
task_9();


// Задание 10
function task_10() {
function TimeToSeconds(a, b = 0, c = 0) {
  let TimeToSeconds = a * 3600 + b * 60 + c;
   return TimeToSeconds;
  }
  
function SecondsToTime(a) {
let hour = Math.trunc(a / 3600);
let minut = Math.trunc((a - hour * 3600) / 60);
let seconds = Math.trunc(a - hour * 3600 - minut * 60);
  
  if (hour < 10) {
  hour = "0" + hour;
  }
  if (minut < 10) {
  minut = "0" + minut;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  let current_time = `${hour}:${minut}:${seconds}`;
  return current_time;
  }
  
  function DifferenceTime(a1, b1, c1, a2, b2, c2) {
    return SecondsToTime(
     24 * 60 * 60 - TimeToSeconds(a1, b1, c1) + TimeToSeconds(a2, b2, c2)
    );
  }
      
  let x1 = 0;
  let y1 = 0;
  let z1 = 0;
  let x2 = 0;
  let y2 = 0;
  let z2 = 0;
  
  do {
    x1 = Math.abs(
      Math.trunc(+prompt("Введите часы более ранней даты от 0 до 23: "))
      );
    y1 = Math.abs(
      Math.trunc(+prompt("Введите минуты более ранней даты от 0 до 59: "))
      );
    z1 = Math.abs(
      Math.trunc(+prompt("Введите секунды более ранней даты от 0 до 59: "))
    );
  
    x2 = Math.abs(
      Math.trunc(+prompt("Введите часы более поздней даты от 0 до 23: "))
      );
    y2 = Math.abs(
      Math.trunc(+prompt("Введите минуты более поздней даты от 0 до 59: "))
      );
    z2 = Math.abs(
      Math.trunc(+prompt("Введите секунды более поздней даты от 0 до 59: "))
      );
  } while (x1 > 23 || y1 > 59 || z1 > 59 || x2 > 23 || y2 > 59 || z2 > 59);
  
    alert(
      "Разница между сегодняшним и завтрашним событием составляет: " +
        DifferenceTime(x1, y1, z1, x2, y2, z2)
    );
  }

task_10();







'use strict';

let num

const isNumber = function(num) {   

    return !isNaN(parseFloat(num)) && isFinite(num);
}

const asking = function() {
  do { 
      num = +prompt("Введите число").trim(); 
  }
  while (!isNumber(num)) 
}

const myInt = function () { 

  for (let i = 0; i < 7; i++){
    if (String(arr[i]).split('')[0] === "2" || String(arr[i]).split('')[0] === "4"){
      console.log(arr[i]);
    }
  }
}



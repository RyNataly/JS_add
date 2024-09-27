'use strict';
// Загадывание случайного числа от 1 до 100

let secretNumber

const isNumber = function(num) {   

    return !isNaN(parseFloat(num)) && isFinite(num);
}

const asking = function(secret) {  

    const checkNum = function(){

        let num
        num = prompt("Угадай число от 1 до 100");
        if (num === null) {
              alert("Игра окончена");
              return ;
        } else if (!isNumber(num)){
              alert("Введи число!");
              checkNum();
        }

        if (num < secret) {
            alert("Загаданное число больше");
            checkNum();
        } else if (num > secret) {
            alert("Загаданное число меньше");
            checkNum();
        } else {
            alert("Поздравляю, Вы угадали!!!");
        }
    }    
    checkNum();   
}    

secretNumber = Math.round(Math.random()*100);
asking(secretNumber);

console.log(secretNumber);

'use strict';
// Загадывание случайного числа от 1 до 100
let atTempt = 10
let secretNumber

const isNumber = function(num) {   

    return !isNaN(parseFloat(num)) && isFinite(num);
}

const asking = function(secret, attempt) {  

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
        
        attempt--
        if (attempt === 0){
            if (confirm ("Вы неугадали число и у вас закончились попытки! Хотите сыграть еще?")){
                asking(Math.round(Math.random()*100), atTempt);
            } else{
                alert("Игра окончена");
                return;
            } 
        }
        if (num < secret) {
            alert("Загаданное число больше! \nОсталось попыток: " + attempt);
            checkNum();
        } else if (num > secret) {
            alert("Загаданное число меньше! \nОсталось попыток: " + attempt);
            checkNum();
        } else {
            if (confirm ("Поздравляю, Вы угадали!!! Хотите сыграть еще?")){
                asking(Math.round(Math.random()*100), atTempt);
            } else{
                alert("Игра окончена");
                return;
            } 
        }
        attempt--;
    }    
    checkNum();   
}    

secretNumber = Math.round(Math.random()*100);
asking(secretNumber, atTempt);


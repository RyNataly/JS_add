'use strict';
 //урок 16 - классы, наследование
    
 class First {
    constructor (name){
        this.name = name
    }

    hello () {
        console.log("Привет я метод родителя!")
    }
 }

 class Second extends First {
    constructor(name, age){
        super(name)
        this.age = age
    }

    hello (){
        super.hello()
        console.log("А я наследуемый метод!")
    }

 }

 const myObject = new Second("Nataly", 100)
 console.log(myObject)
 myObject.hello()
    

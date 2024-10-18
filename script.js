'use strict';
 //урок 16 - классы, наследование
 
let butSelect = document.querySelector('select')
let fieldPerson = document.getElementsByClassName('person') // [1]
let butSubmit = document.querySelector('button[class = add]')
let butDeletes = document.querySelectorAll('button[class = del]')

let inputName = document.querySelectorAll('input[type = text]')[0]
let inputAge = document.querySelectorAll('input[type = text]')[1]  
let inputExperience = document.querySelectorAll('input[type = text]')[2]  
let inputAddress = document.querySelectorAll('input[type = text]')[3]  

let records = document.querySelectorAll('.record')
let tableRef = document.querySelector("table");

let inputFunc = document.querySelector('input[type = text][name = func]') 
let inputChild = document.querySelector('input[type=checkbox][name=child]')

let inputRank = document.querySelector('input[type = text][name = func]')
let inputMarried = document.querySelector('input[type=checkbox][name=married]')

console.log(inputFunc)

let employeeAll = []

const start = function(){

        butSelect.addEventListener('click', selectEmployee)   
        butSubmit.addEventListener('click', addEmployee)  
}
const selectEmployee = function() {
        if (butSelect.value === 'worker') {
            fieldPerson[0].style.removeProperty('display') 
            fieldPerson[1].setAttribute('style', 'display: none;')  
            inputFunc.setAttribute('required', "")
            inputChild.setAttribute('required', "")
        } if (butSelect.value === 'staff') {
            fieldPerson[1].style.removeProperty('display')
            fieldPerson[0].setAttribute('style', 'display: none;')   
        }
}
const addEmployee = function() {

        if  (inputName.value === "" || inputAge.value === "" || inputExperience.value === "" || inputAddress.value === "" || butSelect.value === ""){
            alert("Заполните все поля!")
        } else if (butSelect.value === 'worker' && inputFunc.value === ""){
            alert("Заполните все поля!")
        } else if (butSelect.value === 'worker' && inputFunc.value !== "")      
           {  
            const myWorker = new Worker(inputName.value, inputAge.value) 
            myWorker.id = employeeAll.length
            myWorker.experience = inputExperience.value
            myWorker.address = inputAddress.value
            myWorker.func = inputFunc.value
            myWorker.child = inputChild.checked

            employeeAll.push(myWorker);
            myWorker.about()
            console.log("employeeAll" + myWorker)

             printAll() 
        } else if (butSelect.value === 'staff' && inputFunc.value === ""){
            alert("Заполните все поля!")
        } else if (butSelect.value === 'staff' && inputFunc.value !== "")      
           { 
            const myStaff = new Staff(inputName.value, inputAge.value) 
            myStaff.id = employeeAll.length
            myStaff.experience = inputExperience.value
            myStaff.address = inputAddress.value
            myStaff.rank = inputRank.value
            myStaff.married = inputMarried.checked

            employeeAll.push(myStaff);
            myStaff.about()
            console.log("employeeAll" + employeeAll)

             printAll() 
           }

    /*     records = document.querySelectorAll('.record')
         const cloneRecord = records[0].cloneNode(true)
         records[records.length-1].before(cloneRecord)

         const td = records[records.length-1].querySelectorAll('td')
         console.log(td + "  " + records.length)
         td[0].textContent = "Работник"
         td[1].textContent = myWorker.id + '!'
         td[2].textContent = myWorker.age
         td[3].textContent = myWorker.experience
         td[4].textContent = myWorker.address

         console.log(records)      */                           
}

const delEmployee = function() {
    console.log(this)
    console.log(this.id)
    delete employeeAll[this.id];
    console.log(employeeAll)
    printAll()

}
const printAll = function () {
    // Get a reference to the table
    let records = document.querySelectorAll('tr')
    console.log("records=" + records.length)
    for (let i = records.length-1; i > 0; i--) {
        tableRef.deleteRow(i) 
        console.log("i=" + i)
    }
    let i = 0
    employeeAll.forEach((employee) => {
        console.log ("index=" + i)

        let newRow = tableRef.insertRow(i+1);  // Insert a row in the table at row index 0

        let newCell = newRow.insertCell(0);  // Insert a cell in the row at index 0
        let newText = document.createTextNode(employee.type); // Append a text node to the cell
        newCell.appendChild(newText);

        newCell = newRow.insertCell(1);  // Insert a cell in the row at index 0
        newText = document.createTextNode(employee.name); // Append a text node to the cell
        newCell.appendChild(newText);

        newCell = newRow.insertCell(2);  // Insert a cell in the row at index 0
        newText = document.createTextNode(employee.age); // Append a text node to the cell
        newCell.appendChild(newText);

        newCell = newRow.insertCell(3);  // Insert a cell in the row at index 0
        newText = document.createTextNode(employee.experience); // Append a text node to the cell
        newCell.appendChild(newText);

        newCell = newRow.insertCell(4);  // Insert a cell in the row at index 0
        newText = document.createTextNode(employee.address); // Append a text node to the cell
        newCell.appendChild(newText);

        if (employee.type === "Рабочий"){
            newCell = newRow.insertCell(5);  // Должность
            newText = document.createTextNode(employee.func); // Append a text node to the cell
            newCell.appendChild(newText);

            newCell = newRow.insertCell(6);  // Дети
            newText = document.createTextNode(employee.child ? "есть" : "нет"); // Append a text node to the cell
            newCell.appendChild(newText);         
            
            newCell = newRow.insertCell(7);  // Звание
            newText = document.createTextNode("нет"); // Append a text node to the cell
            newCell.appendChild(newText);

            newCell = newRow.insertCell(8);  // Женат
            newText = document.createTextNode("неважно"); // Append a text node to the cell
            newCell.appendChild(newText);
        }

        if (employee.type === "Служащий"){
            newCell = newRow.insertCell(5);  // Должность
            newText = document.createTextNode("служба зовет"); // Append a text node to the cell
            newCell.appendChild(newText);

            newCell = newRow.insertCell(6);  // Дети
            newText = document.createTextNode("не важно"); // Append a text node to the cell
            newCell.appendChild(newText);

            newCell = newRow.insertCell(7);  // Звание
            newText = document.createTextNode(employee.rank); // Append a text node to the cell
            newCell.appendChild(newText);

            newCell = newRow.insertCell(8);  // Женат
            newText = document.createTextNode(employee.married ? "есть" : "нет"); // Append a text node to the cell
            newCell.appendChild(newText);
        }

        newCell = newRow.insertCell(9);  // Insert a cell in the row at index 0
        //newCell.innerHTML = `<button class="del" id = "${index}">Удалить</button>`;
        const butDel = document.createElement("button");
        // устанавливаем у него текст
        butDel.setAttribute('id', employee.id); 
        i++;
        butDel.classList.add("del")
        butDel.textContent = "Удалить";
        newCell.appendChild(butDel);
        butDel.addEventListener('click', delEmployee)
    });
}


 class Employee {
    constructor (name, age, experience, address){
        this.id = 0
        this.name = name
        this.age = age
        this._experience = experience  //опыт работы
        this._address = address  
    }
    get experience() {
        return this._experience
    }
    set experience(str) {
        this._experience = str
    }
    get address() {
        return this._address
    }
    set address(str) {
        this._address = str
    }
    about () {
        console.log(`Персонал: ${this.name}, Возраст ${this.age}, Стаж ${this.experience}, Адрес ${this.address}`)
    }
    print (){
        // Get a reference to the table
        let tableRef = document.querySelector("table");
        let newRow = tableRef.insertRow(1);  // Insert a row in the table at row index 0
        let newCell = newRow.insertCell(0);  // Insert a cell in the row at index 0
        let newText = document.createTextNode(this.type); // Append a text node to the cell

        newCell = newRow.insertCell(1);  // Insert a cell in the row at index 0
        newText = document.createTextNode(this.name); // Append a text node to the cell
        newCell.appendChild(newText);

        newCell = newRow.insertCell(2);  // Insert a cell in the row at index 0
        newText = document.createTextNode(this.age); // Append a text node to the cell
        newCell.appendChild(newText);

        newCell = newRow.insertCell(3);  // Insert a cell in the row at index 0
        newText = document.createTextNode(this.experience); // Append a text node to the cell
        newCell.appendChild(newText);

        newCell = newRow.insertCell(4);  // Insert a cell in the row at index 0
        newText = document.createTextNode(this.address); // Append a text node to the cell
        newCell.appendChild(newText);

        newCell = newRow.insertCell(5);  // Должность
        newText = document.createTextNode(this.address); // Append a text node to the cell
        newCell.appendChild(newText);

        newCell = newRow.insertCell(6);  // Дети
        newText = document.createTextNode(this.address); // Append a text node to the cell
        newCell.appendChild(newText);

        newCell = newRow.insertCell(7);  // Insert a cell in the row at index 0
        newText = document.createTextNode("Удалить"); // Append a text node to the cell
        newCell.appendChild(newText);
    }
 }

 class Worker extends Employee {
    constructor(name, age, experience, address, func, child){
        super(name, age, experience, address)
        this.func = func
        this.child = child
        this.type = "Рабочий"
        this.records = []
    }
    about (){
        super.about()
        console.log(`Рабочий: должность ${this.func}, дети ${this.child}`)
    }
 }

  class Staff extends Employee {
    constructor(name, age, experience, address, rank, married){
        super(name, age, experience, address)
        this.rank = rank
        this.married = married
        this.type = "Служащий"
    }

    about (){
        super.about()
        console.log(`Служащий: звание ${this.rank}, женат ${this.married}`)
    }
 }

//  const myWorker = new Worker("Nataly", 30) // "15 лет", "Анапа", "охранник", true)
//  myWorker.experience = "10 лет"
//  myWorker.address = "Бразилия"
//  console.log(myWorker)
//  myWorker.about()
//  myWorker.print()

// const myStaff = new Staff("Alexey", 40, "20 лет", "Сочи", "лейтенант", false)
//  console.log(myStaff)
//  myStaff.about()

start()



    

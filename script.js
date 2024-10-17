'use strict';

    const DomElement = function () {

        this.selector = '.selector'
        this.height = 50,
        this.width = 30,
        this.bg = 'Yellow',
        this.fontSize = 18
    }
    
    DomElement.prototype.createElements = function (selector, text = "Всем привет! Вы прочитали важное сообщение.", fontSize = 18, bG = 'Yellow', height = 50, width = 30) {
        this.selector = selector
        this.fontSize = fontSize
        this.bg = bG
        this.height = height
        this.width = width

        if (this.selector.charAt(0) ==='.') {
            let div = document.createElement('div');
            div.className = this.selector.substring(1);
            div.innerHTML = text;
            document.body.append(div);
            
            const block = document.querySelector(this.selector)
        } else if (this.selector.charAt(0) ==='#') {
            let div = document.createElement('div');
            div.id = this.selector.substring(1);
            div.innerHTML = text;
            document.body.append(div);
            const block = document.querySelector(this.selector)
        }

        const block = document.querySelector(this.selector)
        console.log(" Привет " + block + "! + " + this.selector)
        block.style.cssText = `
            font-size: ${this.fontSize}px;
            width: ${this.width}px;
            height: ${this.height}px;
            background-color: ${this.bg};
            `;
        console.log(`
            font-size: ${this.fontSize}px;
            width: ${this.width}px;
            height: ${this.height}px;
            background-color: ${this.bg};
            `)    
    }

    const domElement1  = new DomElement()

    domElement1.createElements('.block')
    domElement1.createElements('#best', "Это div с идендификатором", 20, 'Red', 50, 100)


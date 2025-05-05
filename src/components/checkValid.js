import Widget from "./widget";

export default class CheckValid {
    constructor() {
        this.input = document.querySelector('.input');
        this.button = document.querySelector('.button');
        
        this.button.addEventListener('click', (event) => this.onClickButton(event))
    }

    luhnAlgorithm(cardNumber) {
        const digits = Array.from(String(cardNumber), Number);
        let sum = 0;
        for (let i = digits.length - 1; i >= 0; i--) {
            let num = digits[i];
            if ((i + digits.length) % 2 === 0) {
                num *= 2;
                if (num > 9) num -= 9;
            }
            sum += num;
        }
        return sum % 10 === 0;
    }

    showError() {
        if(!document.querySelector('p')) {
            const parag = document.createElement('p')
            parag.textContent = 'Неверный номер карты'
            const form = document.querySelector('.form')
            form.appendChild(parag)

            return;
        }
    }

    onClickButton(event) {
        event.preventDefault();

        const value = this.input.value.trim();

        if (!value || value.length < 13 || value.length > 19) {
            this.showError()
            return
        }

        const validByLuhn = this.luhnAlgorithm(value);

        if (validByLuhn) {
            alert(`Валидная карта`);
            this.input.value = ''
            const error = document.querySelector('p')
            if (error) {
                error.remove()
            }
            const widget = new Widget()
            widget.addClass()
        } else {
            this.showError()
        }
    }
}
export default class Widget {
    constructor(parentEl) {
        this.parentEl = parentEl
        this.checkNumber = this.checkNumber.bind(this)
        this.input;
    }

    renderForm() {
        return `
            <form class="form">
                <ul class="cards-list">
                    <li class="card active">
                        <img src="./images/mir.png" alt="">
                    </li>
                    <li class="card active">
                        <img src="./images/visa.png" alt="">
                    </li>
                    <li class="card active">
                        <img src="./images/mastercard.png" alt="">
                    </li>
                    <li class="card active">
                        <img src="./images/americanExpress.png" alt="">
                    </li>
                </ul>
                <div class="form-content">
                    <input class="input" type="text" placeholder="Credit card number">
                    <button type="submit">Click to Validate</button>
                </div>
            </form>
        `
    }

    addInnerHtml() {
        this.parentEl.insertAdjacentHTML('beforeend', this.renderForm())
        this.input = document.querySelector('.input')
        this.input.addEventListener('keyup', this.checkNumber)
    }

    checkNumber() {
        const value = this.input.value.trim();
        const cards = document.querySelectorAll('.card')
        if (value.length > 0) {
            cards.forEach(el => {
                el.classList.remove('active')
            })
            if (value.startsWith('2')) {
                cards[0].classList.add('active')
            }
            if (value.startsWith('3')) {
                cards[3].classList.add('active')
            }
            if (value.startsWith('4')) {
                cards[1].classList.add('active')
            }
            if (value.startsWith('5')) {
                cards[2].classList.add('active')
            }
        } else {
            cards.forEach(el => {
                el.classList.add('active')
            })
        }
    }
}
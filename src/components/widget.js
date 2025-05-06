export default class Widget {
    constructor(parentEl) {
        this.parentEl = parentEl;
        this.cardsData = [
            { name: 'Mir', imageSrc: './images/mir.png' },
            { name: 'Visa', imageSrc: './images/visa.png' },
            { name: 'MasterCard', imageSrc: './images/mastercard.png' },
            { name: 'American Express', imageSrc: './images/americanExpress.png' },
            { name: 'jcb', imageSrc: './images/jcb.png' },
            { name: 'diners', imageSrc: './images/diners.png' }
        ];
        this.checkNumber = this.checkNumber.bind(this);
        this.input;
    }
    renderForm() {
        let cardsListHTML = '';
        for (let i = 0; i < this.cardsData.length; i++) {
            const card = this.cardsData[i];
            cardsListHTML += `<li class="card active"><img src="${card.imageSrc}" alt="${card.name}"></li>`;
        }

        return `
            <form class="form">
                <ul class="cards-list">${cardsListHTML}</ul>
                <div class="form-content">
                    <input class="input" type="text" placeholder="Credit card number">
                    <button type="submit" class="button">Click to Validate</button>
                </div>
            </form>
        `;
    }

    addInnerHtml() {
        this.parentEl.insertAdjacentHTML('beforeend', this.renderForm())

        this.input = document.querySelector('.input');
        this.input.addEventListener('keyup', this.checkNumber);
    }

    addClass() {
        const cards = document.querySelectorAll('.card');
        cards.forEach((el) => {
            el.classList.add('active');
        });
    }

    checkNumber() {
        const value = this.input.value.trim();
        const cards = document.querySelectorAll('.card');
        if (value.length > 0) {
            cards.forEach((el) => {
                el.classList.remove('active');
            });

            switch (value.charAt(0)) {
                case '2':
                    cards[0].classList.add('active'); break;
                case '3':
                    if (value.charAt(1) == '0' || value.charAt(1) == '6' || value.charAt(1) == '8') {
                        cards[5].classList.add('active'); break;
                    } else if (value.charAt(1) == '1' || value.charAt(1) == '5') {
                        cards[4].classList.add('active'); break;
                    } else {
                        cards[3].classList.add('active'); break;
                    }
                case '4':
                    cards[1].classList.add('active'); break;
                case '5':
                    cards[2].classList.add('active'); break;
            }
        } else {
            this.addClass()
        }
    }


}
import Widget from '../../components/widget'

const container = document.querySelector('.container')
const widget = new Widget(container)

widget.addInnerHtml()
const cards = document.querySelectorAll('.card')

test.each([
    [
        "371449635398431",
        "361449635398431",
        "381449635398431",
        "351449635398431",
        "311449635398431",
        "4111111111111111",
        "5555555555554444",
        "2200 0000 0000 0053",
    ]
])('check opacity', (number) => {
    if (number.startsWith(2)) {
        expect(cards[0].classList.contains('active')).toBe(true)
    }
    if (number.startsWith(3)) {
        if (number.charAt(1) == '0'|| number.charAt(1) == '6' || number.charAt(1) == '8') {
            expect(cards[5].classList.contains('active')).toBe(true)
        } else if (number.charAt(1) == '1' || number.charAt(1) == '5') {
            expect(cards[4].classList.contains('active')).toBe(true)
        } else {
            expect(cards[3].classList.contains('active')).toBe(true)
        }
    }
    if (number.startsWith(4)) {
        expect(cards[1].classList.contains('active')).toBe(true)
    }
    if (number.startsWith(5)) {
        expect(cards[2].classList.contains('active')).toBe(true)
    }
})
import Widget from '../../components/widget'

const container = document.querySelector('.container')
const widget = new Widget(container)

widget.addInnerHtml()
const cards = document.querySelectorAll('.card')

test.each([
    [
        "371449635398431",
        "4111111111111111",
        "5555555555554444",
        "2200 0000 0000 0053",
    ]
])('check opacity', (number) => {
    if (number.startsWith(2)) {
        expect(cards[0].classList.contains('opacity')).toBe(true)
    }
    if (number.startsWith(3)) {
        expect(cards[3].classList.contains('opacity')).toBe(true)
    }
    if (number.startsWith(4)) {
        expect(cards[1].classList.contains('opacity')).toBe(true)
    }
    if (number.startsWith(5)) {
        expect(cards[2].classList.contains('opacity')).toBe(true)
    }
})
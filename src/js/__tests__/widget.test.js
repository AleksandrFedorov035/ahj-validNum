import Widget from '../../components/widget'

describe('widget tests', () => {
    beforeAll(() => {
        const container = document.createElement('div')
        document.body.append(container)
        const widget = new Widget(container)
        widget.addInnerHtml()
    })

    it('should active mir logo', () => {
        const cards = document.querySelectorAll('.card')
        const input = document.querySelector('.input');
        input.value = '2200000000000053';
        expect(cards[0].classList.contains('active')).toBe(true)
    })

    it('should active diners logo', () => {
        const cards = document.querySelectorAll('.card')
        const input = document.querySelector('.input');
        const arr = [
            "30036592321275",
            "30218047196557",
        ]
        arr.forEach(number => {
            input.value = number
            expect(cards[5].classList.contains('active')).toBe(true)
        })
    })

    it('should active american express logo', () => {
        const cards = document.querySelectorAll('.card')
        const input = document.querySelector('.input');
        const arr = [
            "371449635398431",
        ]
        arr.forEach(number => {
            input.value = number
            expect(cards[3].classList.contains('active')).toBe(true)
        })
    })

    it('should active jcb logo', () => {
        const cards = document.querySelectorAll('.card')
        const input = document.querySelector('.input');
        const arr = [
            "3530111333300000",
            "3566002020360505",
        ]
        arr.forEach(number => {
            input.value = number
            expect(cards[4].classList.contains('active')).toBe(true)
        })
    })

    it('should active visa logo', () => {
        const cards = document.querySelectorAll('.card')
        const input = document.querySelector('.input');
        input.value = '4111111111111111';
        expect(cards[1].classList.contains('active')).toBe(true)
    })
    it('should active mastercard logo', () => {
        const cards = document.querySelectorAll('.card')
        const input = document.querySelector('.input');
        input.value = '2202200273752202';
        expect(cards[2].classList.contains('active')).toBe(true)
    })
})
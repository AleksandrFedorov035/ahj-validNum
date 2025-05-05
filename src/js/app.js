import Widget from '../components/widget'
import CheckValid from '../components/checkValid'

const container = document.querySelector('.container')
const widget = new Widget(container)
widget.addInnerHtml()


document.addEventListener('DOMContentLoaded', () => {
    new CheckValid()
})

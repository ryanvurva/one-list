if (process.env.NODE_ENV !== 'production') require('./index.html')
import './styles/screen.scss'

const main = () => {
  const input = document.querySelector('input')
  const list = document.querySelector('ul.one-list')
  const button = document.querySelector('button')
  const form = document.querySelector('form')

  button.addEventListener('click', (event) => {
    event.preventDefault()
    const listItem = input.value
    const li = document.createElement('li')
    li.textContent = listItem
    list.appendChild(li)
    let didDblClick = false
    li.addEventListener('click', () => {
      setTimeout(() => {
        if (!didDblClick) {
          li.style.textDecoration = 'line-through'
        }
      }, 300)
    })
    li.addEventListener('dblclick', (event) => {
      didDblClick = true
      list.removeChild(li)
    })
    form.reset()
  })
}

document.addEventListener('DOMContentLoaded', main)

if (module.hot) {
  module.hot.dispose(() => window.location.reload())
  module.hot.accept(err => console.error(err))
}

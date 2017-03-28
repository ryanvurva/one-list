if (process.env.NODE_ENV !== 'production') require('./index.html')
import './styles/screen.scss'

const main = () => {
  const input = document.querySelector('input')
  const list = document.querySelector('ul.one-list')
  const button = document.querySelector('button')
  const form = document.querySelector('form')
  // const myStorage = localStorage

  button.addEventListener('click', (event) => {
    event.preventDefault()
    let num = document.querySelectorAll('.one-list li').length
    console.log(num)
    const listItem = input.value
    localStorage.setItem('Item' + num, listItem)
    const li = document.createElement('li')
    li.textContent = listItem
    list.appendChild(li)
    let didDblClick = false
    li.addEventListener('click', () => {
      // add css class that fades
      setTimeout(() => {
        if (!didDblClick) {
          li.style.textDecoration = 'line-through'
        }
      }, 300)
    })
    li.addEventListener('dblclick', (event) => {
      // finish fading it before removing
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

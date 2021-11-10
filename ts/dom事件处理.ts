const bt = document.querySelector('#btn') as HTMLButtonElement
bt.addEventListener('click',(e:Event)=> {
  e.preventDefault()
const body = document.querySelector('body')
body.insertAdjacentHTML('beforeend','<h2>😄</h2>')

})

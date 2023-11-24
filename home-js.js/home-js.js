let toggle = document.querySelector('.toggle')
let list = document.querySelector('.list1')

toggle.addEventListener('click',()=>{
  list.classList.toggle('hide')
})
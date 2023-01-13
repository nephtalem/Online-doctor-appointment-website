const menuBtn = document.querySelector('.menu-btn')
const headerLogo = document.querySelector('.header-logo')
const navEl = document.querySelector('.nav')
const userStatus = document.querySelector('.user-status')
const closeBtn = document.getElementById('close-btn')
const headerEl = document.querySelector('.header')

let mql = window.matchMedia("(max-width: 580px)")


mql.onchange = function(e) {
    if (e.matches) {
        console.log('changed')
        navEl.style.display = 'none'
        menuBtn.style.display = 'block'
    } else {
        menuBtn.style.display = 'none'
        navEl.style.display = 'flex'
        closeBtn.style.display = 'none'
    }
  }


  
menuBtn.addEventListener('click', function(){
    headerLogo.style.display = 'none'
    navEl.style.display = 'flex'
    
    menuBtn.style.display = 'none'
    closeBtn.style.display = 'block'

    headerEl.style.padding ='0'
})


closeBtn.addEventListener('click',function(){
    navEl.style.display = 'none'
    menuBtn.style.display = 'block'
    headerLogo.style.display = 'flex'
    headerEl.style.padding ='1em'
})


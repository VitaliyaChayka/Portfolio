'use strict'


let wHeight = window.innerHeight;


window.addEventListener('resize', function(){
    wHeight = window.innerHeight;
})

window.addEventListener('scroll', function(e) {
    let blocks = document.querySelectorAll('.block')
    for (let block of blocks){
    let pos = block.getBoundingClientRect()
    let posTop = pos.top
    let posHeight = pos.height
    if (posTop < wHeight - posHeight && posTop > - posHeight){
        block.classList.add('anim')
    }
   else {
    block.classList.remove('anim')
}
    }

})

//////////////scroll sections
let sectionHight = 0
for (let link of document.getElementsByClassName('nav__link')){
    link.addEventListener('click', function(e){
        e.preventDefault();
        let id_section = this.getAttribute('href') //#section
        let pos = document.querySelector(id_section).getBoundingClientRect();
        window.scrollTo({
        top: document.querySelector(id_section).offsetTop - 110,
        left: 0,
        behavior: 'smooth'
    });
    })
}
////////////////////////////
let navLink = [].slice.call(document.querySelectorAll('.nav__list a'));
navLink.forEach(function(el) {
    el.addEventListener('click', function(e) {
        e.preventDefault();
        navLink.forEach((nl) => {
            if (nl !== this) {
                nl.classList.remove('active');
            }
        });
        this.classList.add('active');
    }, false);
});
/////////////////////////изменение цвета ссылки при скроле в зависимости от секции

 function activeScrollLink() {
       for (let link of document.getElementsByClassName('nav__link')) {
          let id_section = link.getAttribute('href');
          window.addEventListener('scroll', function () {
             let pos = document.querySelector(id_section).getBoundingClientRect();
             if (pos.top < wHeight / 2 && pos.top > pos.height * -1 + wHeight / 2) {
                link.classList.add('link__active')
             } else {
                link.classList.remove('link__active')
             }
          })
       }
    }
activeScrollLink();


/////////////////////////

let upBtn = document.getElementById ('scrollup');
window.addEventListener('scroll', function(){
    if (wHeight < window.scrollY){
        upBtn.classList.add('scrollup_active')
    }
    else {
        upBtn.classList.remove('scrollup_active')

    }
})


///////////burger///////

let burger = document.querySelector('.header__burger');
let nav = document.querySelector('.nav');
let body = document.getElementsByTagName('body');

burger.addEventListener('click', function(){
    burger.classList.toggle('active');
    nav.classList.toggle('active');
})

nav.addEventListener('click', function(){
    burger.classList.remove('active');
    nav.classList.remove('active');
 })
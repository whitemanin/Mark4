let buttonTask1 = document.querySelector('#menu__task-1')
let buttonTask2 = document.querySelector('#menu__task-2')
let buttonTask3 = document.querySelector('#menu__task-3')
const menuLinks = document.querySelectorAll('.menu__link[data-goto]')
buttonTask1.addEventListener('mouseenter', function () {
    this.style.color = '#CFCFCF'
    this.style.borderBottom = '1.5px solid #CFCFCF'

})
buttonTask1.addEventListener('mouseleave', function () {
    this.style.color = 'white'
    this.style.borderBottom = '0'
})
buttonTask2.addEventListener('mouseenter', function () {
    this.style.color = '#CFCFCF'
    this.style.borderBottom = '1.5px solid #CFCFCF'
})
buttonTask2.addEventListener('mouseleave', function () {
    this.style.color = 'white'
    this.style.borderBottom = '0'
})
buttonTask3.addEventListener('mouseenter', function () {
    this.style.color = '#CFCFCF'
    this.style.borderBottom = '1.5px solid #CFCFCF'
})
buttonTask3.addEventListener('mouseleave', function () {
    this.style.color = 'white'
    this.style.borderBottom = '0'
})
if (menuLinks.length > 0){
    menuLinks.forEach(menuLinks => {
        menuLinks.addEventListener('click', onMenuLinkClick)
    })
    function onMenuLinkClick(e) {
        const menuLink = e.target
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto)
            const  gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('.header').offsetHeight

            window.scrollTo({
                top: gotoBlockValue,
                behavior: 'smooth'
            })
            e.preventDefault()
        }
    }
}

$(document).ready(function (){
    $('.gallery__slider').slick({
        arrows: true,
        dots: false,
        adaptiveHeight: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 1000,
        easing: 'linear',
        infinite: false,
        autoplay: false,
        draggable: false,
        swipe: true,
        touchThreshold: 10,
        touchMove: true,
        waitForAnimate: false,
        centerMode: false,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]


    })
})

let ol = document.querySelector('.page-ol')
let inputOl = document.getElementById('input')
let buttonOl = document.querySelector('.button-ol')
let color = document.querySelector('.ol_color')

buttonOl.addEventListener('click', function () {
    let liLast = document.createElement('li');
    switch (color.value) {
        case '1' :
            liLast.innerHTML = `${inputOl.value}`;
            ol.append(liLast);
            liLast.style.color = '#002CFF'
            inputOl.value = ""
            break
        case '2' :
            liLast.innerHTML = `${inputOl.value}`;
            ol.append(liLast);
            liLast.style.color = '#1FFF00'
            inputOl.value = ""
            break
        case '3' :
            liLast.innerHTML = `${inputOl.value}`;
            ol.append(liLast);
            liLast.style.color = '#F1FF00'
            inputOl.value = ""
            break
        case '4' :
            liLast.innerHTML = `${inputOl.value}`;
            ol.append(liLast);
            liLast.style.color = '#FF0000'
            inputOl.value = ""
            break
        case '5' :
            liLast.innerHTML = `${inputOl.value}`;
            ol.append(liLast);
            liLast.style.color = '#FF9200'
            inputOl.value = ""
            break
        case '6' :
            liLast.innerHTML = `${inputOl.value}`;
            ol.append(liLast);
            liLast.style.color = '#000000'
            inputOl.value = ""
            break
    }
})

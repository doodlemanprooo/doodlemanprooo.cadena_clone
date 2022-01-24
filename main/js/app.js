//!Scroll To Top: -------------------------------------------------->

const scrollToTop = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', ()=> {
    if (window.pageYOffset > 100) {
        scrollToTop.classList.add('active');
    } else {
        scrollToTop.classList.remove('active');
    }
})

scrollToTop.addEventListener('click', ()=> {
    window.scrollTo(0, 0);
})

//!Scroll to Zoom: ------------------------------------------------>
const section = document.querySelector('.ssss-img');
const pi1 = document.querySelector('.pi1');
const pi2 = document.querySelector('.pi2');
const pi3 = document.querySelector('.pi3');

const whatGetPage = document.querySelector('.what-get-page');
const whatGetRow = document.querySelector('.wg-row');


window.onscroll = function() {
    if (window.scrollY >= section.offsetTop) {
        console.log('Reached projects section');
        pi1.classList.add('zoom');
        pi2.classList.add('zoom');
        pi3.classList.add('zoom');
    }
}

//!ScrollReveal Code: --------------------------------------------->

window.sr = ScrollReveal();

sr.reveal('.animate-to-left', {
    origin: 'left',
    duration: 2000,
    distance: '50px',
    delay: 300
});
sr.reveal('.animate-to-right', {
    origin: 'right',
    duration: 2000,
    distance: '50px',
    delay: 300
});

sr.reveal('.animate-to-top', {
    origin: 'bottom',
    duration: 2000,
    distance: '50px',
    delay: 300
});

//!FAQ Whole working Thing: --------------------------------------------->
let faqBtn = document.getElementsByClassName('faq-btn');
let faqContent = document.getElementsByClassName('faq-content');
let icons = document.getElementsByClassName('icons')

for (let i = 0; i < faqBtn.length; i++) {
    faqBtn[i].addEventListener('click', () => {

        console.log(faqContent[i].style.height, faqContent[i].scrollHeight)

        if (parseInt(faqContent[i].style.height) != faqContent[i].scrollHeight){
            faqContent[i].style.height = faqContent[i].scrollHeight + 'px';
            icons[i].classList.remove('fa-plus');
            icons[i].classList.add('fa-minus');
        } else {
            faqContent[i].style.height = '0px'; 
            icons[i].classList.remove('fa-minus');
            icons[i].classList.add('fa-plus');
        }

        for (let j = 0; j < faqContent.length; j++) {
            if (j !== i) {
                faqContent[j].style.height = '0px'; 
                icons[j].classList.remove('fa-minus');
                icons[j].classList.add('fa-plus');
            }
        }
    })
}

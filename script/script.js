window.addEventListener('load', function(){
   new Glider(document.querySelector('.glider'), {
  // Mobile-first defaults
  slidesToShow: 1,
  slidesToScroll: 1,
  scrollLock: true,
  dots: '#resp-dots',
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  },
  responsive: [
    {
      // screens greater than >= 775px
      breakpoint: 775,
      settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: 'auto',
        slidesToScroll: 'auto',
        itemWidth: 250,
        duration: 0.25
      }
    },{
      // screens greater than >= 1024px
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        itemWidth: 250,
        duration: 0.25
      }
    }
  ]
})})


const MobileButton = document.querySelector('.btn-mobile');
const ButtonScrollDown = document.querySelector('.btn-scoll-down');
const FirstHeader = document.querySelector('.first-header');
const Header = document.querySelector('.header');


MobileButton.addEventListener('click', () => {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
    MobileButton.classList.toggle('active');
});

ButtonScrollDown.addEventListener('click', () => {
    const historia = document.getElementById('historia');
    const distanciadotopo = historia.offsetTop;
    const distanciaMobile = 700; // Ajuste a distância para telas menores
    const distanciaPadrao = distanciadotopo - 100; // Ajustar a distância do topo para telas maiores

    const distancia = window.innerWidth <= 480 ? distanciaMobile : distanciaPadrao;

    window.scrollTo({
        top: distancia,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        FirstHeader.classList.add('active');
    }else {
        FirstHeader.classList.remove('active');
    }
});

window.addEventListener('scroll', () => {
    const topoheader = Header.offsetTop;
    const distanciaMobile = 620;
    const distanciaPadrao = 700;
    const distancia = window.innerWidth <= 480 ? distanciaMobile : distanciaPadrao;
    if (window.scrollY >= distancia - topoheader) {
        Header.classList.add('active');
    }
    else {
        Header.classList.remove('active');
    }
});

window.addEventListener('resize', () => {
  
    const distanciaMobile = 620;
    const distanciaPadrao = 700;
    const distancia = window.innerWidth <= 480 ? distanciaMobile : distanciaPadrao;

    
    if (window.scrollY >= distancia - Header.offsetTop) {
        Header.classList.add('active');
    } else {
        Header.classList.remove('active');
    }
});


const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    }
});

let $formulario_contacto = document.getElementById('formulario_contacto');
$formulario_contacto.addEventListener('submit', function(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
  
  alert('Gracias por contactarnos, te responderemos a la brevedad');
});

AOS.init();
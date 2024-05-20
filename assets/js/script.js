/*==========================================================================*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

/*==========================================================================*/

let sections = document.querySelector('sections');
let navLinks = document.querySelector('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };

    });

    /*========================================================================*/
    
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*=======================================================================*/

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');


};

/*============================================================================*/

ScrollReveal({
    distance: '80px',
    duration: 200,
    delay: 200,
});

ScrollReveal().reveal('.inicio-content, heading', { origin: 'top' });
ScrollReveal().reveal('.inicio-img, .servicios-container, .portafolio-box, .contactos form', { origin: 'buttom'});
ScrollReveal().reveal('.inicio-contactos h1, .sobremi-img', { origin:'left'});
ScrollReveal().reveal('.inicio-contactos p, .sobremi-content', { origin: 'right' });


/*=================================== typed js ===================================*/

const typed = new Typed('.multiple-text', {
    strings: ['Desarrolladora de páginas web', 'Desarrolladora de Software'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});


// Obtengo el formulario
const form = document.querySelector('form');

// Agrego un event listener para el envío del formulario
form.addEventListener('submit', function(event) {
  // Prevengo el comportamiento del envío del formulario
  event.preventDefault();

  // Obtengo los valores de los campos del formulario
  const nombre = document.querySelector('input[placeholder="Nombre Completo"]').value;
  const email = document.querySelector('input[placeholder="Correo Electrónico"]').value;
  const telefono = document.querySelector('input[placeholder="Número de telefono"]').value;
  const asunto = document.querySelector('input[placeholder="Asunto"]').value;
  const mensaje = document.querySelector('textarea').value;

  // Valido los campos
  if (nombre.trim() === '') {
    alert('Por favor, ingrese su nombre completo.');
    return;
  }

  if (email.trim() === '') {
    alert('Por favor, ingrese su correo electrónico.');
    return;
  }

  if (telefono.trim() === '') {
    alert('Por favor, ingrese su número de teléfono.');
    return;
  }

  if (asunto.trim() === '') {
    alert('Por favor, ingrese el asunto.');
    return;
  }

  if (mensaje.trim() === '') {
    alert('Por favor, ingrese un mensaje.');
    return;
  }

  //Envio el formulario
  form.submit();
});

// Obtengo todos los enlaces del portafolio
const portfolioLinks = document.querySelectorAll('.portfolio-link');

// Agrego un event listener a cada enlace
portfolioLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevengo el comportamiento predeterminado del enlace
    const url = link.getAttribute('href'); // Obtengo la URL del enlace
    
    // Se redirige al usuario de la URL correspondiente
    window.location.href = url;
  });
});





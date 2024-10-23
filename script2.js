gsap.registerPlugin(ScrollTrigger);
document.addEventListener("DOMContentLoaded", function () {
  const cards = [
    { id: ".card:nth-child(1)", y: -2 }, 
    { id: ".card:nth-child(2)", y: -3 }, 
    { id: ".card:nth-child(3)", y: -4 }, 
    { id: ".card:nth-child(4)", y: -5 }, 
  ];

  cards.forEach((card) => {
    ScrollTrigger.create({
      trigger: card.id, 
      start: "top 80%", 
      end: "top 70%", 
      scrub: 1,
      onUpdate: (self) => {
        gsap.to(card.id, {
          y: `${card.y * self.progress}rem`, 
          duration: 1, 
          ease: "power4.ease", 
        });
      },
    });
  });
});

let isOpen = false;

const toggleMenu = () => {
    isOpen = !isOpen;
    const mobileMenu = document.querySelector('.mobile-menu');

    if (isOpen) {
        gsap.to(mobileMenu, { height: '100vh', duration: 1.5, ease: 'power3.inOut' });
        const mobileMenuItems = mobileMenu.querySelectorAll('ul li');
        gsap.fromTo(mobileMenuItems, { y: -50, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.2, delay: 0.2 });
    } else {
        gsap.to(mobileMenu, { height: '0', duration: 1.5, ease: 'power3.inOut' });
    }
};

const handleLinkClick = (e) => {
    e.preventDefault(); // Evitar el comportamiento predeterminado del enlace
    isOpen = false;
    gsap.to('.mobile-menu', { height: '0', duration: 1, ease: 'power3.inOut' });

    const target = document.querySelector(e.target.getAttribute('href'));
    if (target) {
        gsap.to(window, {
            scrollTo: { y: target.offsetTop, autoKill: true },
            duration: 1.5,
            ease: 'power3.inOut'
        });
    }
};


// Variable para almacenar la última posición de scroll
let lastScrollTop = 0;
const navBar = document.getElementById('navBar');

// Evento de scroll
window.addEventListener('scroll', () => {
    const currentScroll = document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scroll hacia abajo - ocultar el nav
        gsap.to(navBar, { duration: 0.7, y: -200 }); // Oculta el nav deslizándolo hacia arriba
    } else {
        // Scroll hacia arriba - mostrar el nav
        gsap.to(navBar, { duration: 0.5, y: 0 }); // Muestra el nav deslizándolo hacia abajo
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Evita valores negativos
});


document.querySelectorAll('nav ul li a').forEach(item => {
  // Aplicar SplitType individualmente a cada 'a'
  const splitItem = new SplitType(item, {
    types: 'chars', // Separar por caracteres
  });

  // Animación al hacer hover
  item.addEventListener('mouseenter', () => {
    // Letras suben y desaparecen
    gsap.to(splitItem.chars, {
      y: -10, // Desplazar hacia arriba
      opacity: 0, // Desaparecer
      duration: 0.3,
      stagger: 0.03, // Retraso entre letras
      ease: 'power2.out',
      onComplete: () => {
        // Después de desaparecer, que reaparezcan desde abajo
        gsap.set(splitItem.chars, { y: 20 }); // Colocarlas por debajo
        gsap.to(splitItem.chars, {
          y: 0, // Desplazar hacia su posición original
          color: "#c05716",
          opacity: 1, // Reaparecer
          duration: 0.3,
          stagger: 0.03,
          ease: 'power2.out',
        });
      }
    });
  });

  // Animación al quitar el hover
  item.addEventListener('mouseleave', () => {
    // Letras bajan y desaparecen
    gsap.to(splitItem.chars, {
      y: 10, // Desplazar hacia abajo
      opacity: 0, // Desaparecer
      duration: 0.3,
      stagger: 0.03,
      ease: 'power2.out',
      onComplete: () => {
        // Después de desaparecer, que vuelvan a su posición original
        gsap.set(splitItem.chars, { y: -20 }); // Colocarlas por arriba
        gsap.to(splitItem.chars, {
          y: 0, // Desplazar hacia su posición original
          color: "#fff",
          opacity: 1, // Reaparecer
          duration: 0.3,
          stagger: 0.03,
          ease: 'power2.out',
        });
      }
    });
  });
});

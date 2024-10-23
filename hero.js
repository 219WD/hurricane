document.addEventListener("DOMContentLoaded", function () {
  // Establecemos la opacidad inicial del botón a 0
  gsap.set(".main__scroll", {
    opacity: 0
  });

  // Transición para que el botón aparezca con opacidad en 0.2 segundos, retrasada 6.5 segundos
  gsap.to(".main__scroll", {
    opacity: 1,
    delay: 8.5 + 2,  // Retraso de 6.5 segundos más el delay existente de 2 segundos
    duration: 2  // Duración de la animación
  });

  // Retraso de 6.5 segundos para el texto de título
  gsap.to(".title", {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", /* Desbloquea el texto */
    duration: 1.5,
    ease: "power3.inOut",
    delay: 8.5 + 0.5  // Retraso original de 0.5 segundos + 6.5 segundos de la intro
  });

  gsap.to(".title .text-fill", {
    y: 0, /* Mueve el texto a su posición original */
    duration: 1.5,
    ease: "power3.out",
    delay: 7 + 1  // Retraso original de 1 segundo + 6.5 segundos
  });

  gsap.to(".paragraph", {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", /* Desbloquea el texto */
    duration: 1.5,
    ease: "power3.inOut",
    delay: 8.5 + 1.5  // Retraso original de 1.5 segundos + 6.5 segundos
  });

  gsap.to("button", {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", /* Desbloquea el texto */
    duration: 1.5,
    ease: "power3.inOut",
    delay: 8.5 + 2  // Retraso original de 2 segundos + 6.5 segundos
  });

  // Mostrar el logo después de 6.5 segundos
  setTimeout(() => {
    document.querySelector('.logo2').classList.add('show');
  }, 8000);

  // Animación escalonada de los items del menú con el retraso de 6.5 segundos
  const listItems = document.querySelectorAll('nav ul li');
  listItems.forEach((li, index) => {
    setTimeout(() => {
      li.classList.add('show');
    }, 8000 + (index * 200)); // Retraso de 6.5 segundos más el retraso escalonado
  });
});

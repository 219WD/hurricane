// Crear una instancia de Lenis
const lenis = new Lenis({
  duration: 1.2, // Duración del scroll
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Efecto de easing
  smoothWheel: true,
  smoothTouch: false,
});

// Sincronizar Lenis con GSAP ScrollTrigger
lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Asegura que Lenis se ejecute con GSAP
});

gsap.ticker.lagSmoothing(0); // Desactivar la suavización del lag

// Hacer que los enlaces con # usen el scroll suave de Lenis
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); // Evitar el comportamiento predeterminado

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      lenis.scrollTo(targetElement); // Usar Lenis para desplazarse
    }
  });
});

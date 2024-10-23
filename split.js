// Primera animación (texto con la clase .text-fill-current)
const split = new SplitType(".text-fill-current", {
  types: "words, chars",
});

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".text-fill-current",
    start: "top 90%",
    end: "bottom 50%", // Ajusta el rango para una mejor experiencia
    scrub: 0.5,
  },
}).to(
  split.chars,
  {
    color: "#c05716", // Cambia el color a naranja
    stagger: 0.1, // Aparece de forma escalonada
  },
  0.1
);

// Segunda animación (texto con la clase .text-fill-third)
const splitThird = new SplitType(".text-fill-third", {
  types: "words, chars",
});

const tlThird = gsap.timeline({
  scrollTrigger: {
    trigger: ".text-fill-third",
    start: "top 90%",
    end: "bottom 50%", // Ajusta el rango
    scrub: 0.5,
  },
}).to(
  splitThird.chars,
  {
    color: "#c05716",
    stagger: 0.1,
  },
  0.1
);

// Animación para el subtítulo en la sección 2
const splitSubtitle = new SplitType(".section-2-container .subtitle", {
  types: "words, chars",
});

const tlSubtitle = gsap.timeline({
  scrollTrigger: {
    trigger: ".section-2-container .subtitle",
    start: "top 99%",
    end: "bottom 50%", // Ajusta el rango
    scrub: 0.5,
  },
}).to(
  splitSubtitle.chars,
  {
    color: "#c05716",
    stagger: 0.1,
  },
  0.1
);

// Animación para el título en la sección 3
const splitTitle = new SplitType(".section-3-container .title", {
  types: "words, chars",
});

const tlTitle = gsap.timeline({
  scrollTrigger: {
    trigger: ".section-3-container .title",
    start: "top 99%",
    end: "bottom 50%", // Ajusta el rango
    scrub: 0.5,
  },
}).to(
  splitTitle.chars, // Corregido para seleccionar correctamente los caracteres de la clase .title
  {
    color: "#c05716",
    stagger: 0.1,
  },
  0.1
);

// Animación para el SVG en la sección 3
gsap.to(".section-3-card svg path", {
  scrollTrigger: {
    trigger: ".section-3-card", 
    start: "top 95%",
    end: "bottom 50%", // Ajusta el rango para una mejor sincronización
    scrub: 0.5
  },
  fill: "#c05716", // Cambia el color de blanco a naranja
  duration: 1,
  y: 150
});


gsap.from('.section-3-card-reverse svg path', {
  scrollTrigger: {
    trigger: '.section-3-container', // El contenedor que activará el efecto
    start: "top 95%",
    end: "bottom 10%", // Ajusta el rango para una mejor sincronización
    scrub: 0.5, // Permite que el efecto sea fluido durante el scroll
  },
  fill: "#c05716",
  y: -200, // Desplaza la tarjeta 100 píxeles hacia abajo
  duration: 1, // Duración del efecto
});

// Aplicar la misma lógica a .reverse-title
const splitReverseTitle = new SplitType(".section-3-container .title.reverse-title", {
  types: "words, chars",
});

const tlReverseTitle = gsap.timeline({
  scrollTrigger: {
    trigger: ".section-3-container .reverse-title",
    start: "top 99%",
    end: "bottom 50%",
    scrub: 0.5,
  },
}).to(
  splitReverseTitle.chars, // Selecciona los caracteres de .reverse-title
  {
    color: "#c05716", // El mismo efecto de color
    stagger: 0.1, // El mismo efecto escalonado
  },
  0.1
);

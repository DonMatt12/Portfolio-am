// Pequeño detalle: mensaje al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    console.log("Portafolio Estilo Griego cargado ✅");
});


document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    const targetPosition = target.getBoundingClientRect().top + window.scrollY; // posición del destino
    const startPosition = window.scrollY; // posición inicial
    const distance = targetPosition - startPosition; // distancia a recorrer
    const duration = 1500; // tiempo en ms (más grande = más lento)
    let start = null;

    function animation(currentTime) {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    // Función de aceleración/desaceleración
    function easeInOutQuad(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  });
});

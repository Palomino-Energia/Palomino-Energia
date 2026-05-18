// 1. Navegación suave para los enlaces del menú
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 2. Efecto de aparición (Reveal) al hacer scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
        
    });
}, observerOptions);

// Aplicamos el observador a todas las secciones
document.querySelectorAll('section').forEach(section => {
    section.classList.add('reveal'); // Añadimos una clase base
    observer.observe(section);
});

// 3. Validación simple del formulario de contacto
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('¡Gracias por tu interés en la energía para Palomino! Te contactaremos pronto.');
    form.reset();
});

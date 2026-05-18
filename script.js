document.addEventListener('DOMContentLoaded', () => {
    console.log("Script cargado y listo");

    // 1. Navegación suave
    const links = document.querySelectorAll('nav a');
    links.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Solo actuamos si es un enlace interno (empieza con #)
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const section = document.querySelector(targetId);
                if (section) {
                    section.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 2. Efecto de aparición (Reveal)
    const observerOptions = {
        threshold: 0.15 // Se activa cuando el 15% de la sección es visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Aplicamos a las secciones y también a las tarjetas del equipo para que se vea genial
    document.querySelectorAll('section, .miembro').forEach(el => {
        el.classList.add('reveal'); 
        observer.observe(el);
    });

    // 3. Formulario (Solo si existe en la página actual)
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('¡Gracias por tu interés en la soberanía energética de Palomino!');
            form.reset();
        });
    }
});

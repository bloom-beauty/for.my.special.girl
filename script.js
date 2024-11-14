document.addEventListener("DOMContentLoaded", function() {
    // Variables para el menú hamburguesa
    const hamburgerIcon = document.querySelector(".hamburger-icon");
    const hamburgerMenu = document.querySelector(".hamburger-menu");

    // Alternar el menú hamburguesa al hacer clic en el icono
    hamburgerIcon.addEventListener("click", function(event) {
        event.stopPropagation(); // Evitar que el clic se propague al documento
        hamburgerMenu.classList.toggle("active");
    });

    // Cerrar el menú si se hace clic fuera de él
    document.addEventListener("click", function(event) {
        // Verificar si el clic fue fuera del menú hamburguesa
        if (!hamburgerMenu.contains(event.target) && !hamburgerIcon.contains(event.target)) {
            hamburgerMenu.classList.remove("active");
        }
    });

    // Variables para el slider
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    // Función para mostrar una diapositiva específica
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'flex' : 'none';
        });
    }

    // Función para mostrar la siguiente diapositiva
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    // Función para mostrar la diapositiva anterior
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }

    // Eventos de los botones de siguiente y anterior
    document.querySelector('.next').addEventListener('click', nextSlide);
    document.querySelector('.prev').addEventListener('click', prevSlide);

    // Mostrar la primera diapositiva al cargar la página
    showSlide(currentSlide);

    // Cambiar de diapositiva automáticamente cada 7 segundos
    setInterval(nextSlide, 7000);
});

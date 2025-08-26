// Archivo: carusel.js o carousel.js
    document.addEventListener('DOMContentLoaded', function() {
        const slides = document.querySelectorAll('.carousel-slide');
        const infos = document.querySelectorAll('.service-info');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        
        let currentSlide = 0;
        const totalSlides = slides.length;
        
        // Verificar que existen los elementos
        if (slides.length === 0 || infos.length === 0) {
            console.log('No se encontraron elementos del carrusel');
            return;
        }
        
        // Función para mostrar slide
        function showSlide(index) {
            // Remover clase active de todos los slides e infos
            slides.forEach(slide => slide.classList.remove('active'));
            infos.forEach(info => info.classList.remove('active'));
            
            // Agregar clase active al slide e info actual
            if (slides[index] && infos[index]) {
                slides[index].classList.add('active');
                infos[index].classList.add('active');
            }
            
            currentSlide = index;
        }
        
        // Función para siguiente slide
        function nextSlide() {
            const next = (currentSlide + 1) % totalSlides;
            showSlide(next);
        }
        
        // Función para slide anterior
        function prevSlide() {
            const prev = (currentSlide - 1 + totalSlides) % totalSlides;
            showSlide(prev);
        }
        
        // Event listeners
        if (nextBtn && prevBtn) {
            nextBtn.addEventListener('click', nextSlide);
            prevBtn.addEventListener('click', prevSlide);
        }
        
        // Auto-play con control
        let autoPlayInterval;
        
        function startAutoPlay() {
            autoPlayInterval = setInterval(nextSlide, 2000);
        }
        
        function stopAutoPlay() {
            if (autoPlayInterval) {
                clearInterval(autoPlayInterval);
            }
        }
        
        // Pausar auto-play cuando el mouse está sobre el carrusel
        const carousel = document.querySelector('.image-carousel');
        if (carousel) {
            carousel.addEventListener('mouseenter', stopAutoPlay);
            carousel.addEventListener('mouseleave', startAutoPlay);

            // Iniciar auto-play
            startAutoPlay();
        }
        // Inicializar con el primer slide
        showSlide(0);
});
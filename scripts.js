document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("formMessage").classList.remove("hidden");
    setTimeout(function() {
        document.getElementById("formMessage").classList.add("hidden");
    }, 3000);
});

document.addEventListener("DOMContentLoaded", function() {
    var heroSwiper = new Swiper('#home .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    var productosSwiper = new Swiper('#productos .swiper-container', {
        slidesPerView: 3,  // Cambia según tus necesidades
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
        }
    });

    var actualidadSwiper = new Swiper('#actualidad .swiper-container', {
        slidesPerView: 1,  // Puedes ajustarlo según cuántas noticias quieras mostrar
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});


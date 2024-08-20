
$(document).ready(function(){
    let swiper1 = null;
    let swiper2 = null;
    let swiper3 = null;



    initFaclityDetailSwiper();

    $(".m-tabs-tab").click(function(){
        setTimeout(function(){
            initFaclityDetailSwiper()
        }, 1);
    });

    function initFaclityDetailSwiper(){
        swiper1 = new Swiper(".m-tabs-content.active .list-image .swiper-container", {

            speed: 1000,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".list-image .swiper-button-next",
                prevEl: ".list-image .swiper-button-prev",
            },
        });



        swiper2 = new Swiper(".popup .swiper-container", {
            speed: 1000,
            observer: true,
            observeParents: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".popup .swiper-button-next",
                prevEl: ".popup .swiper-button-prev",
            },
        });

        swiper3 = new Swiper(".m-swiper.type01 .swiper-container", {
            speed: 1000,
            observer: true,
            loop:true,
            observeParents: true,
            spaceBetween: 10,
            slidesPerView: 3,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".m-swiper.type01 .swiper-btn-next",
                prevEl: ".m-swiper.type01 .swiper-btn-prev",
            },
        });
    }

})


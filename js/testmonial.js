 
      const swiper20 = new Swiper("#secondslider", {
        direction: "horizontal",
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,

         autoplay: {
                delay: 1000,
                disableOnInteraction: false,
            },

        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          475: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        },

        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    

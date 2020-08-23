$(function () {
    "use strict";
    //variable
    var html_body = $('html,body');
    
    // preloader js
    $('body').addClass('active_preloader');
    $(window).on('load', function() { 
      $('.preloader').fadeOut();
      $('.preloader_img').delay(350).fadeOut('slow');
      $('body').removeClass('active_preloader');
    });
    
    
    //Update Header Style and Scroll to Top
    function headerStyle() {
        if($('.main-header').length){
            var windowpos = $(window).scrollTop();
            var siteHeader = $('.main-header');
            var scrollLink = $('.back-to-top');
            if (windowpos >= 110) {
                siteHeader.addClass('fixed-header');
                scrollLink.addClass('open');
            } else {
                siteHeader.removeClass('fixed-header');
                scrollLink.removeClass('open');
            }
        }
    }
    
    // dropdown menu
    var mobileWidth = 992;
    var navcollapse = $('.navigation li.dropdown');
     
    $(window).on('resize', function(){
        navcollapse.children('ul').hide();
    });

    navcollapse.hover(function() {
    if($(window).innerWidth() >= mobileWidth){
          $(this).children('ul').stop(true, false, true).slideToggle(300);
        }
    }); 

    //Submenu Dropdown Toggle
    if($('.main-header .navigation li.dropdown ul').length){
        $('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');     
        
        //Dropdown Button
        $('.main-header .navigation li.dropdown .dropdown-btn').on('click', function() {
            $(this).prev('ul').slideToggle(500);
        });
        
        //Disable dropdown parent link
        $('.navigation li.dropdown > a').on('click', function(e) {
            e.preventDefault();
        });
    }

    // Scroll to a Specific Div
    if($('.scroll-to-target').length){
        $(".scroll-to-target").on('click', function() {
            var target = $(this).attr('data-target');
           // animate
           $('html, body').animate({
               scrollTop: $(target).offset().top
             }, 1000);
    
        });
    }
    
    //header search js
    $('.scarch_icon').click(function () {
        $('form').toggleClass('open');
    });

    //banner slider js
    $('.banner_slider').slick({
        prevArrow: '.slider_priv',
        nextArrow: '.slider_next',
        fade: true,
        autoplay: true,
        autoplaySpeed: 7000,
        pauseOnHover: false,
        speed: 1500,
        infinite: true,
    });

    //we_care play js
    $('#vidBox').VideoPopUp({
        backgroundColor: "#17212a",
        opener: "trigger",
        maxweight: "640",
        idvideo: "example"
    });


    //testimonial slider js
    $('.patient_content').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        speed: 1500,
        infinite: true,
        arrows: false,
    });


    //doctors slider js
    $('.doctors_content').slick({
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        speed: 1500,
        infinite: true,
        arrows: false,
        responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
    });
    
    
    //counter js
    $('.counter').counterUp({
    delay: 10,
    time: 1000
    });
    
    //partner slider js
    $('.partner_content').slick({
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnHover: false,
        speed: 1500,
        infinite: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            },
            {   breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
    
    //aos animation js
    AOS.init({
        duration: 1000,
        mirror: true,
    });
    
   //When document is Scrollig, do
    $(window).on('scroll', function() {
        headerStyle();
    });
    
    
    
    //gallery mixitup js
    var mixer = mixitup('.gallery_items');
    
    //gallery venobox js
    $('.venobox').venobox(); 
    

    //galleries header active js
    $(document).on('click', '#gallery .gallery_menu ul li', function () {
        $(this).addClass('active').siblings().removeClass('active')
    });
    
    

});
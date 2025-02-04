(function($) {
    'use strict';

    // Mean Menu
	$('.mean-menu').meanmenu({
		meanScreenWidth: "991"
	});

	// Header Sticky
	$(window).on('scroll',function() {
		if ($(this).scrollTop() > 120){  
			$('.navbar-area').addClass("is-sticky");
		}
		else{
			$('.navbar-area').removeClass("is-sticky");
		}
	});



    // Testimonials Slider
    $('.testimonials-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        items: 1,
        autoplay: true,
        autoHeight:true,
        autoplayHoverPause: true,
        mouseDrag: false,
        touchDrag: false,
    })

    // Banner Slider
    $('.banner-slider').owlCarousel({
        loop: true,
        margin: 0,
        autoHeight: true,
        nav: false,
        items: 1,
        dots:  true,
        center: true,
        autoplay: true,
        autoplayHoverPause: true,
    })

    // Choose Slider
    $('.choose-slider').owlCarousel({
        loop: true,
        margin: 30,
        autoHeight: true,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        navText: [
            "<i class='bx bx-left-arrow-alt'></i>",
            "<i class='bx bx-right-arrow-alt'></i>"
        ],
        responsive:{
            0:{
                items: 2,
            },
            768:{
                items: 3,
                center: false,
            },
            1000:{
                items: 4,
            },
        }
    })

    // Service Preview Slider
    $('.service-preview-slider').owlCarousel({
        loop: true,
        margin: 30,
        autoHeight: true,
        nav: true,
        items: 1,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        navText: [
            "<i class='bx bx-left-arrow-alt'></i>",
            "<i class='bx bx-right-arrow-alt'></i>"
        ],
    })


    // Recipe Slider
    $('.recipe-slider').owlCarousel({
        loop: true,
        margin: 30,
        autoHeight: true,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items: 1,
            },
            768:{
                items: 2,
            },
            1000:{
                items: 3,
            },
            1200:{
                items: 4,
            },
        }
    })

    // Gallery Slider
    $('.gallery-slider').owlCarousel({
        loop: true,
        margin: 25,
        autoHeight: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items: 2,
            },
            768:{
                items: 3,
                center: false,
            },
            1000:{
                items: 5,
            },
        }
    })

    // Popup Gallery 
    $('.gallery-view').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] 
        }
    });

    // Popup Video 
    $('.video-1').magnificPopup({
        disableOn: 0,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        iframe: {
            patterns: {
              vimeo: {
                index: 'vimeo.com/',
                id: function(url) {
                  var m = url.match('/vimeo.com\\/([0-9]+)/');
                  return m ? m[1] : null;
                },
                src: '//player.vimeo.com/video/940814771?autoplay=1'
              }
            }
          }
          
    });

    // Popup Video 2 
    $('.video-2').magnificPopup({
        disableOn: 0,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        iframe: {
            patterns: {
                vimeo: {
                index: 'vimeo.com/',
                id: function(url) {
                    var m = url.match('/vimeo.com\\/([0-9]+)/');
                    return m ? m[1] : null;
                },
                src: '//player.vimeo.com/video/1013528608?autoplay=1'
                }
            }
            }
            
    });

    // Popup Video 3 
    $('.video-3').magnificPopup({
        disableOn: 0,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        iframe: {
            patterns: {
                vimeo: {
                index: 'vimeo.com/',
                id: function(url) {
                    var m = url.match('/vimeo.com\\/([0-9]+)/');
                    return m ? m[1] : null;
                },
                src: '//player.vimeo.com/video/1013527287?autoplay=1'
                }
            }
            }
            
    });

    // Popup Video 4 
    $('.video-4').magnificPopup({
        disableOn: 0,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        iframe: {
            patterns: {
                vimeo: {
                index: 'vimeo.com/',
                id: function(url) {
                    var m = url.match('/vimeo.com\\/([0-9]+)/');
                    return m ? m[1] : null;
                },
                src: '//player.vimeo.com/video/1015293883?autoplay=1'
                }
            }
            }
            
    });

      

      

    // Popup Video Two
    $('.btn-play').magnificPopup({
        disableOn: 0,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    

    // Datetimepicker
    $('#datetimepicker').datepicker();

    // Tabs Single Page
    $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
    $('.tab ul.tabs li').on('click', function (g) {
        var tab = $(this).closest('.tab'), 
        index = $(this).closest('li').index();
        tab.find('ul.tabs > li').removeClass('current');
        $(this).closest('li').addClass('current');
        tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
        tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
        g.preventDefault();
    });

    // FAQ Accordion JS
	$('.accordion').find('.accordion-title').on('click', function(){
		// Adds Active Class
		$(this).toggleClass('active');
		// Expand or Collapse This Panel
		$(this).next().slideToggle('fast');
		// Hide The Other Panels
		$('.accordion-content').not($(this).next()).slideUp('fast');
		// Removes Active Class From Other Titles
		$('.accordion-title').not($(this)).removeClass('active');		
    });

    // Input Plus & Minus Number JS
    $('.input-counter').each(function() {
        var spinner = jQuery(this),
        input = spinner.find('input[type="text"]'),
        btnUp = spinner.find('.plus-btn'),
        btnDown = spinner.find('.minus-btn'),
        min = input.attr('min'),
        max = input.attr('max');
        
        btnUp.on('click', function() {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.on('click', function() {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });
    }); 

    // Count Time JS
	function makeTimer() {
		var endTime = new Date("October 30, 2022 17:00:00 PDT");			
		var endTime = (Date.parse(endTime)) / 1000;
		var now = new Date();
		var now = (Date.parse(now) / 1000);
		var timeLeft = endTime - now;
		var days = Math.floor(timeLeft / 86400); 
		var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
		var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
		var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
		if (hours < "10") { hours = "0" + hours; }
		if (minutes < "10") { minutes = "0" + minutes; }
		if (seconds < "10") { seconds = "0" + seconds; }
		$("#days").html(days + "<span>Days</span>");
		$("#hours").html(hours + "<span>Hours</span>");
		$("#minutes").html(minutes + "<span>Minutes</span>");
		$("#seconds").html(seconds + "<span>Seconds</span>");
	}
    setInterval(function() { makeTimer(); }, 300);

        

    // Back To Top
    $('body').append("<div class='go-top'><i class='bx bx-chevrons-up'></i></div>");
    $(window).on('scroll', function() {
        var scrolled = $(window).scrollTop();
        if (scrolled > 600) $('.go-top').addClass('active');
        if (scrolled < 600) $('.go-top').removeClass('active');
    });
    $('.go-top').on('click', function() {
        $('html, body').animate({
            scrollTop: '0',
        }, 500 );
    });

    // Preloader JS
    $(window).on('load',function(){
        $(".preloader").fadeOut(500);
    });

    //WOW JS
    new WOW().init();

    // Buy Now Btn
    $('body').append("<a href='https://www.edizionilswr.it/stop-reflusso-e-gastrite.html' target='_blank' class='buy-now-btn'>ACQUISTALO</a>");

})($);






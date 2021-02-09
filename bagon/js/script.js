 $(document).ready(function() {
     $(".menu-icon").on("click", function() {
         $("nav ul").toggleClass("showing");
     });
 });

 // Scrolling Effect


 //Best Begin
 $(document).ready(function() {
     $(".fancybox").fancybox({
         openEffect: "none",
         closeEffect: "none"
     });

     $(".zoom").hover(function() {

         $(this).addClass('transition');
     }, function() {

         $(this).removeClass('transition');
     });
 });

 //Best End

 const signUpButton = document.getElementById('signUp');
 const signInButton = document.getElementById('signIn');
 const container = document.getElementById('container');

 signUpButton.addEventListener('click', () => {
     container.classList.add("right-panel-active");
 });

 signInButton.addEventListener('click', () => {
     container.classList.remove("right-panel-active");
 });


 //Galerie Video Start

 //Galerie Video End


 let modalId = $('#image-gallery');

 $(document)
     .ready(function() {

         loadGallery(true, 'a.thumbnail');

         //This function disables buttons when needed
         function disableButtons(counter_max, counter_current) {
             $('#show-previous-image, #show-next-image')
                 .show();
             if (counter_max === counter_current) {
                 $('#show-next-image')
                     .hide();
             } else if (counter_current === 1) {
                 $('#show-previous-image')
                     .hide();
             }
         }

         /**
          *
          * @param setIDs        Sets IDs when DOM is loaded. If using a PHP counter, set to false.
          * @param setClickAttr  Sets the attribute for the click handler.
          */

         function loadGallery(setIDs, setClickAttr) {
             let current_image,
                 selector,
                 counter = 0;

             $('#show-next-image, #show-previous-image')
                 .click(function() {
                     if ($(this)
                         .attr('id') === 'show-previous-image') {
                         current_image--;
                     } else {
                         current_image++;
                     }

                     selector = $('[data-image-id="' + current_image + '"]');
                     updateGallery(selector);
                 });

             function updateGallery(selector) {
                 let $sel = selector;
                 current_image = $sel.data('image-id');
                 $('#image-gallery-title')
                     .text($sel.data('title'));
                 $('#image-gallery-image')
                     .attr('src', $sel.data('image'));
                 disableButtons(counter, $sel.data('image-id'));
             }

             if (setIDs == true) {
                 $('[data-image-id]')
                     .each(function() {
                         counter++;
                         $(this)
                             .attr('data-image-id', counter);
                     });
             }
             $(setClickAttr)
                 .on('click', function() {
                     updateGallery($(this));
                 });
         }
     });

 // build key actions

 //Galerie Experience Begin
 $(document).ready(function() {

     $('.bt_close ').stop().click(function() {
         $('.fullscreen').css('display', 'none');
     });

     $('.gallery .row article').stop().click(function() {
         /*
         var element = '<div class="fullscreen"><div class="container"><header class="row"><i class="fa fa-times bt_close"></i></header><div class="row"><div class="col-xs-12 col-sm-12 col-md-12 col-lg-12"><img src="" alt="" title=""/></div></div></div></div>';
            
         $('body').prepend(element);
         */
         var image = $(this).find('img').attr('src')
         $('.fullscreen .container .row div img').attr('src', image);

         $('.fullscreen').css('display', 'block');
     });


 });

 //Galerie Experience Begin


 //Image Carousel Begin
 $('.slide1').slick({
     slidesToShow: 4,
     slidesToScroll: 1,
     dots: true,
     responsive: [{
             breakpoint: 1024,
             settings: {
                 slidesToShow: 3,
                 slidesToScroll: 1,
                 infinite: true,
                 dots: true
             }
         },
         {
             breakpoint: 600,
             settings: {
                 slidesToShow: 2,
                 slidesToScroll: 1
             }
         },
         {
             breakpoint: 480,
             settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1
             }
         }
         // You can unslick at a given breakpoint now by adding:
         // settings: "unslick"
         // instead of a settings object
     ]
 });

 /**slider 2 js **/
 $('.slider2').slick({
     slidesToShow: 3,
     slidesToScroll: 1,
     dots: true,
     autoplay: true,
     speed: 300,
     responsive: [{
             breakpoint: 1024,
             settings: {
                 slidesToShow: 3,
                 slidesToScroll: 1,
                 infinite: true,
                 dots: true
             }
         },
         {
             breakpoint: 600,
             settings: {
                 slidesToShow: 2,
                 slidesToScroll: 1
             }
         },
         {
             breakpoint: 480,
             settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1
             }
         }
         // You can unslick at a given breakpoint now by adding:
         // settings: "unslick"
         // instead of a settings object
     ]
 });

 //Image Carousel End

 jQuery(document).ready(function() {

     jQuery("#gallery").unitegallery({
         gallery_theme: "video",
         gallery_width: 1100,
         gallery_height: 450
     });

 });


 //Cities Scroll Begin
 $(window).scroll(function() {
     if ($(window).scrollTop() >= 300) {
         $('nav').addClass('fixed-header');
         $('nav div').addClass('visible-title');
     } else {
         $('nav').removeClass('fixed-header');
         $('nav div').removeClass('visible-title');
     }
 });

 //Cities Scroll End
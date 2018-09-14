/***********************************************************************************************/
    /* BREAD */
    /***********************************************************************************************/
    var wH = jQuery(window).height() ;
    jQuery('.breadcrumb-fullscreen:not(.breadcrumbCustom)').css('height',wH);
    jQuery('.breadcrumb:not(.breadcrumb-fullscreen)').each(function(){
        
        jQuery('header.header').addClass('no-breadcrumb-fullscreen');

    });

    jQuery('.breadcrumb.breadcrumb-video-content').each(function(){
        
        jQuery('header.header').removeClass('no-breadcrumb-fullscreen');

    });

    //Br options
    jQuery(function(){

    "use strict";

    var breadcrumbH = jQuery('.breadcrumb').outerHeight();

    if (jQuery(window).width() >= 1200){  
      jQuery('.breadcrumb-video-content').each(function(){

        breadcrumbH = (jQuery('.breadcrumb').outerHeight() - 250);

      });
    };

    jQuery('.breadcrumb-video-content').each(function(){

      breadcrumbH = (jQuery('.breadcrumb').outerHeight() - 75);

    });

    jQuery('.breadcrumb-fullscreen-parent').after('<div class="before-affix-breadcrumb"></div>');

    var wH = jQuery(window).height();

    jQuery('.breadcrumb > *').each(function(){

      var fadeStart= 0
          ,fadeUntil= 400
          ,fading = jQuery(this);

      jQuery(window).bind('scroll', function(){
          var offset = jQuery(document).scrollTop()
              ,opacity=0
          ;
          if( offset<=fadeStart ){
              opacity=1;
          }else if( offset<=fadeUntil ){
              opacity=1-offset/fadeUntil;
          }
          fading.css('opacity',opacity);
      });

    });

    function affixPhoneMenu() {

      jQuery('header.header').addClass('phone-menu-bg');

      jQuery('.phone-menu-bg').affix({
          offset: {
            top: 50
          }
      });

    };

    function unAffixPhoneMenu() {

      jQuery('header.header').removeClass('phone-menu-bg');

    };

    if (jQuery(window).width() <= 768){
          affixPhoneMenu();
        } else {
         jQuery(window).resize(function(){
          if (jQuery(window).width() <= 768){
            affixPhoneMenu();
          }
      });
    };

    if (jQuery(window).width() >= 768){
          unAffixPhoneMenu();
        } else {
         jQuery(window).resize(function(){
          if (jQuery(window).width() >= 768){
            unAffixPhoneMenu();
          }
      });
    };

    jQuery('.breadcrumb-fullscreen-parent:not(.breadcrumbCustom)').affix({
        offset: {
          top: function () {
            return (this.top = ((jQuery(window).height() / 100 * 95) - 69))
          }
        }
    });

    jQuery('.breadcrumb-fullscreen-parent.breadcrumbCustom').affix({
        offset: {
          top: function () {
            return (this.top = breadcrumbH - 83);
          }
        }
    });

    jQuery('.eventBread .player').each(function(){
      var evH = jQuery(window).height() / 100 * 95;
      jQuery(this).css('height', evH);
    });

    jQuery('.sliderContainerBreadcrumb').each(function(){

      var vHCB = jQuery(window).height() / 100 * 95;

      // jQuery('.before-FullscreenSlider').css({'height':vHCB});

    });

    jQuery('header.header').affix({
        offset: {
          top: function () {
            return (this.top = (breadcrumbH - 120))
          }
        }
    });

    jQuery('header.header').on('affix.bs.affix', function () {

            jQuery('.project-single').addClass('affix');

        });

        jQuery('header.header').on('affix-top.bs.affix', function () {

            jQuery('.project-single').removeClass('affix');

        });

    function fullScreenBreadcrumb() {

        jQuery('.breadcrumb-fullscreen-parent:not(.breadcrumbCustom)').on('affix-top.bs.affix', function () {

            jQuery('.before-FullscreenSlider').css('height',0);

            if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {

              jQuery(this).css('bottom',0);

            };

        });

        jQuery('.breadcrumb-fullscreen-parent:not(.breadcrumbCustom)').on('affix.bs.affix', function () {

            jQuery('.before-FullscreenSlider').css('height',jQuery(window).height() / 100 * 95);

            if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {

              jQuery(this).css('bottom',wH - 69);

            };

        });

        jQuery('.breadcrumb-fullscreen-parent.breadcrumbCustom').on('affix-top.bs.affix', function () {

            jQuery('.before-FullscreenSlider').css('height',0);

            if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {

              jQuery(this).css('bottom',0);

            };

        });

        jQuery('.breadcrumb-fullscreen-parent.breadcrumbCustom').on('affix.bs.affix', function () {

            jQuery('.before-FullscreenSlider').css('height',breadcrumbH);

            if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {

              jQuery(this).css('bottom',wH - 69);

            };

        });

    };

    function splitEqual() {

        jQuery('.split-equal').each(function(){

          var bigImageH = jQuery(this).find('.big-image').outerHeight();

          jQuery('.padding-content > div').css('height', bigImageH - 160 );

        });

    };

    fullScreenBreadcrumb();

    jQuery(window).resize(function(){

        fullScreenBreadcrumb();

        splitEqual();

    });

});
	jQuery(function(){

  "use strict";

   function portfolioSingleAffix() {

        var breadcrumbHH = jQuery('.breadcrumb').outerHeight();

        if (jQuery('.breadcrumb-video-content').length) {

            breadcrumbHH = jQuery('.breadcrumb').outerHeight() - 70;

        };

        jQuery('.portfolio-single').affix({
            offset: {
              top: breadcrumbHH - 75
            }
        });

        jQuery('.portfolio-single').on('affix.bs.affix', function () {

            jQuery('header.header').addClass('affix');

        });

        jQuery('.portfolio-single').on('affix-top.bs.affix', function () {

            jQuery('header.header').removeClass('affix');

        });

        var portfolioSingleHeight = function() {

          var windowHeight = jQuery(window).height() ,
              portfolioSingleHeaderH = jQuery('.header-portfolio-single').outerHeight() ,
              portfolioSingleFooterH = jQuery('.footer-portfolio-single').outerHeight() ,
              footerH = jQuery('footer.footer').outerHeight() ,
              fromTopH = 229 + portfolioSingleHeaderH + portfolioSingleFooterH ,
              finalPortfolioSingleContentH = windowHeight - fromTopH - footerH ;

          jQuery('.content-portfolio-single').css({

            'max-height' : finalPortfolioSingleContentH ,

            'padding' : '0' ,

            'margin' : '40px 0'

          });

        }

        portfolioSingleHeight();

        jQuery(window).resize(function(){

          portfolioSingleHeight();

        });

    };

    portfolioSingleAffix();

    jQuery(window).resize(function(){

      portfolioSingleAffix();

    });

    jQuery('.portfolio-single .footer-portfolio-single .social-icons a i.fa-plus').parent().parent().css('display','inline-block');

    jQuery('.portfolio-single .footer-portfolio-single .social-icons a i.fa-plus').parent().on('click',function(e){

      e.preventDefault();

      jQuery('.portfolio-single .footer-portfolio-single .social-icons li').css('display','inline-block');

      jQuery(this).parent().hide();

    });

});
  
  jQuery(function(){

    jQuery(function(){

        var videoID = jQuery('.video-bg').attr('id');

        jQuery('.video-bg').okvideo({ 
           source: videoID,
           volume: 0,
           loop: true,
           hd:true,
           adproof: true,
           annotations: false
        });

    });

    jQuery(".breadcrumb").fitVids({ customSelector: "iframe"});

  });
   /***********************************************************************************************/
   /* END BREAD */
   /***********************************************************************************************/

   <!-- ================================================== -->
<!-- =============== START STARTER JS ================ -->
<!-- ================================================== -->
  
jQuery(document).ready(function(){
  
  "use strict";

  // FitVides Option
  jQuery("html").fitVids({ customSelector: "iframe"});

  // LightBox Options
  jQuery(".attachment").find('a > img:not(.attachment-thumbnail)').parent().attr('rel','gallery').fancybox({
    fitToView: true,
    autoSize :  true,
    margin : 30,
    autoScale : true,
    width : '100%',
    height : '100%',
    showNavArrows: true,
    showCloseButton: true,
    helpers : {
      media : {}
    }
  });

  jQuery(".lightbox").attr('rel','gallery').fancybox({
    fitToView: true,
    autoSize :  true,
    margin : 30,
    autoScale : true,
    width : '100%',
    height : '100%',
    showNavArrows: true,
    showCloseButton: true,
    helpers : {
      media : {}
    }
  });
  
  // "single-post-content" is the class of blog-single content container
  jQuery(".single-post-content").find('a > img').parent().attr('rel','gallery').fancybox({
    fitToView: true,
    autoSize :  true,
    margin : 30,
    autoScale : true,
    width : '100%',
    height : '100%',
    showNavArrows: true,
    showCloseButton: true,
    helpers : {
      media : {}
    }
  });

  //Activate the "star" plugin from StarHomePage
  jQuery(".star").each(function() {
      postars(jQuery('.cover').get(0)).init();
  });

  //Start Home-Video-Player
  jQuery(function(){
    jQuery(".player").YTPlayer();
  });

  //Start RyalSlider
  function royalSliderAva() {

    jQuery('#ava-slider').each(function(){

      var wH = jQuery(window).height();

      jQuery(this).parent().css('height',wH);
      
      jQuery(this).css('height',wH);

      jQuery(this).royalSlider({
        arrowsNav: true,
        loop: true,
        keyboardNavEnabled: true,
        controlsInside: false,
        fadeinLoadedSlide: true,
        imageScaleMode: 'fill',
        arrowsNavAutoHide: false,
        autoScaleSlider: false,
        controlNavigation: false,
        thumbsFitInViewport: false,
        navigateByClick: true,
        startSlideId: 0,
        autoScaleSlider: true,
        autoPlay: {
          // autoplay options go gere
          enabled: true,
          pauseOnHover: true,
          delay:1000
        },
        transitionType:'move',
        globalCaption: false,
        slidesSpacing: 0,
        deeplinking: {
        enabled: true,
        change: false,

        },
      });
    });
  };

  function afterRSInit() {

    jQuery('.rsContent .rsImg').each(function(){

      var thisSrc = jQuery(this).attr('src');

      jQuery(this).hide();

    });

    jQuery(window).scroll(function(){

      var actualScroll = jQuery(window).scrollTop() * 0.5;

      jQuery('.rsContent').css({
        'background-position': '50% ' + actualScroll + 'px'
      });

      console.log(actualScroll);

    });

  }

  afterRSInit();

  royalSliderAva();

  jQuery(window).resize(function(){

    afterRSInit();

    royalSliderAva();

  });
  
  //Page Loader

  jQuery('.page-loader').delay(800).fadeOut('slow');

  //Page Loader Ends

  /***********************************************************************************************/
  /* GO TO TOP BUTTON */
  /***********************************************************************************************/
  // Go to top button
      jQuery(window).load(function(){
         jQuery(window).scroll(function(){

            if(jQuery(document).scrollTop() > 300)
            {    
                jQuery('.goTop').css({bottom:"50px"});
            }
            else
            {  
               jQuery('.goTop').css({bottom:"-80px"});
            }
        }); 
        jQuery('#overlay').fadeOut();
      });
       
    jQuery('.goTop').on("click",function(){
        jQuery('html, body').animate({scrollTop:0}, 'slow');
        return false;
    }); 
  // End button top
  /***********************************************************************************************/
  /* END GO TO TOP BUTTON */
  /***********************************************************************************************/

  /***********************************************************************************************/
  /* MENU */
  /***********************************************************************************************/
  jQuery('.open-menu').on('click', function(){

    jQuery(this).toggleClass('active');

    jQuery('.menu-fixed-container').toggleClass('open');

  });

  jQuery('.x-filter').on('click',function(){

    jQuery('.open-menu').toggleClass('active');

    jQuery('.menu-fixed-container').toggleClass('open');

  });

  jQuery('.menu-fixed-container > nav > ul > li > a').on('click',function(){

        jQuery(this).parent().siblings().toggleClass('no-hovered');
        jQuery(this).parent().toggleClass('click');
        jQuery(this).parent().siblings().removeClass('click'); 
    });

  jQuery('.menu-fixed-container > nav > ul > li > .sub-menu').parent().addClass('hover-sub-menu');

  jQuery('.menu-fixed-container > nav > ul > li  > .sub-menu').on('click',function(){

      jQuery(this).parent().toggleClass('hovered-sub-menu ');

  });

  jQuery('.menu-fixed-container nav ul li .sub-menu').parent().find('> a').on('click', function(e){

    e.preventDefault();

  });
/***********************************************************************************************/
/* END MENU */
/***********************************************************************************************/

/***********************************************************************************************/
  /* COUNTER */
  /***********************************************************************************************/
  if ( $( '.sm-countdown' ).length > 0 ) {
  
      $( '.sm-countdown' ).each( function() {
        var $this = $( this );
        var mode = $this.hasClass( 'sm-style1' ) ? 'val' : 'text';
        $this.ccountdown( $this.data( 'date' ), mode );
      } );
      $( '.sm-countdown.sm-style1 .element' ).knob({
        draw : function () {
          var a = this.angle(this.cv)  // Angle
            , sa = this.startAngle     // Start angle
            , ea = sa + a        // End angle
            , r = true
            , delta_deg = 6
            , delta_rad = delta_deg / 180 * Math.PI;
  
          this.g.lineWidth = this.lineWidth;
  
          this.g.strokeStyle = r ? this.o.fgColor : this.fgColor ;
          var sa_deg = parseInt(sa / Math.PI * 180) % 360;
          var ea_deg = parseInt(ea / Math.PI * 180) % 360;
          var idx =0 ;
          if (ea_deg < sa_deg) ea_deg += 360;
          var ea_deg_round = Math.round(ea_deg / delta_deg) * delta_deg;
          for (var ta_deg = sa_deg; ta_deg <= ea_deg_round; ta_deg += delta_deg) {
            this.g.beginPath();
            var ta_rad = ta_deg / 180 * Math.PI;
            this.g.arc(this.xy, this.xy, this.radius, -( ta_rad - delta_rad / 4 ), -( ta_rad + delta_rad / 4 ), true); 
            this.g.stroke();
          }
          var rs_deg = ea_deg_round + delta_deg;
          for (var ta_deg = rs_deg; ta_deg < sa_deg + 360; ta_deg += delta_deg) {
            this.g.beginPath();
            var ta_rad = ta_deg / 180 * Math.PI;
            this.g.strokeStyle = this.o.bgColor;
            this.g.arc(this.xy, this.xy, this.radius, -( ta_rad - delta_rad / 4) , -( ta_rad + delta_rad / 4 ), true); 
            this.g.stroke();
          }
          return false;
        }
      } );
    }
  /***********************************************************************************************/
  /* END COUNTER */
  /***********************************************************************************************/

  /***********************************************************************************************/
  /* HIDE FUCTIONS */
  /***********************************************************************************************/
  jQuery(window).scroll(function(){
    if(jQuery(document).scrollTop() > 200){
      jQuery('.mb_YTPBar').css({'display': 'none'});

    }
    else{
        jQuery('.mb_YTPBar').css({'display': 'block'});
      }
  });
  /***********************************************************************************************/
  /* END HIDE FUNCTIONS */
  /***********************************************************************************************/

  /***********************************************************************************************/
  /* START ISOTOPE */
  /***********************************************************************************************/
  function isotope() {

    var container = jQuery('.aqura-filter-content ul');

    container.imagesLoaded(function() {

     container.isotope();

    });

    container.isotope();

    var jQueryoptionSets = jQuery('.categories ul'),

    jQueryoptionLinks = jQueryoptionSets.find('a');

    jQueryoptionLinks.on("click", function(){

     var jQuerythis = jQuery(this);

     if ( jQuerythis.hasClass('selected') ) {

      return false;

     }
     var jQueryoptionSet = jQuerythis.parents('.categories ul');

     jQueryoptionSet.find('.selected').removeClass('selected');

     jQuerythis.addClass('selected');

     var options = {},

      key = jQueryoptionSet.attr('data-option-key'),

      value = jQuerythis.attr('data-option-value');

     value = value === 'false' ? false : value;

     options[ key ] = value;

     if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {

      changeLayoutMode( jQuerythis, options )

     } else {

      container.isotope( options );

     }

     return false;

    });

   };

   isotope();

   jQuery(window).resize(function(){

    isotope();

   });
  /***********************************************************************************************/
  /* END ISOTOPE */
  /***********************************************************************************************/

  /***********************************************************************************************/
  /* START CAROUSEL */
  /***********************************************************************************************/
  jQuery(".owl-carousel").owlCarousel({
    items:1,
    nav:true,
    navText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>']
    
  });
  /***********************************************************************************************/
  /* END CAROUSEL */
  /***********************************************************************************************/
  
  /***********************************************************************************************/
  /* INSTAGRAM */
  /***********************************************************************************************/
  var feedSidebar = new Instafeed({
        get: 'user',
        userId: 3525630579, // your user id
        accessToken: '3525630579.1677ed0.97c989299c974ff79ded19ab4812f339', // your access token
        sortBy: 'most-liked',
        template: '<li><a href="{{link}}" target="_blank"><img class="img-responsive" src="{{image}}" /></a></li>',
        target: 'instagram-sidebar-widget',
        limit: 9,
        resolution: 'low_resolution'
    });
    if ($('#instagram-sidebar-widget').length>0) {
        feedSidebar.run();
    }
    /***********************************************************************************************/
    /* END INSTAGRAM */
    /***********************************************************************************************/
   
    /***********************************************************************************************/
    /* JPLAYER */
    /***********************************************************************************************/
    jQuery('.trak-item audio').each(function(){
      
        var seconds = jQuery(this)[0].duration;
        var duration = moment.duration(seconds, "seconds");
        
        var time = "";
        var hours = duration.hours();
        if (hours > 0) { time = hours + ":" ; }
        
        time = time + duration.minutes() + ":" + duration.seconds();
        jQuery(this).parent().find('.trak-duration').text(time);
    });

    jQuery('.jplayerButton').on('click', function(){

      jQuery(this).toggleClass('active');

      jQuery('.playlist-wrapper').fadeToggle('open');

      jQuery('body').toggleClass('opacityPlaylist');

    });
    /***********************************************************************************************/
    /* END JPLAYER */
    /***********************************************************************************************/
});
<!-- ================================================== -->
<!-- =============== END STARTER JS ================ -->
<!-- ================================================== -->

  /*!
 * Author : http://andreatchori.com/
 *
 * Copyright (c) 2018 Euphrate André Atchori
 */
  
  let wH = jQuery(window).height();
	jQuery('.breadcrumb-fullscreen').css('height',wH);
	jQuery('.breadcrumb:not(.breadcrumb-fullscreen)').each(function(){
  jQuery('header.header').addClass('no-breadcrumb-fullscreen');
    });
 
jQuery(document).ready(function(){
  "use strict";
  /* Start Jquery lector */
     jQuery('.trak-item audio').each(function(){
        let seconds = jQuery(this)[0].duration;
        let duration = moment.duration(seconds, "seconds");
        let time = "";
        let hours = duration.hours();
        if (hours > 0) { time = hours + ":" ; }
        time = time + duration.minutes() + ":" + duration.seconds();
        jQuery(this).parent().find('.trak-duration').text(time);
    });

    jQuery('.jplayerButton').on('click', function(){
      jQuery(this).toggleClass('active');
      jQuery('.playlist-wrapper').fadeToggle('open');
      jQuery('body').toggleClass('opacityPlaylist');
    });
    /* End jquery lector */
});


/**
 * Created by TDR on 10/2/15.
 */

$(document).ready(function(){
    $(".nav_profile_img").click(function(){
        $( ".profile_options" ).toggleClass( "profile_options_show" );
        $( ".profile_options" ).toggleClass( "fadeInDown" );
        $( ".first .second" ).toggleClass( "zoomIn" );
    });

});
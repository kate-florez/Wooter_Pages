/**
 * Created by TDR on 10/2/15.
 */

$(document).ready(function(){

    $(".nav_profile_img").click(function(){
        $( ".hamburger_menu_list" ).removeClass( "profile_options_show" );
        $( ".hamburger_menu_list" ).removeClass( "slideInLeft" );
        $( ".hamburger_menu_list .first .second" ).removeClass( "fadeInUp" );
        $( ".profile_options1" ).toggleClass( "profile_options_show" );
        $( ".profile_options1" ).toggleClass( "slideInLeft" );
        $( ".profile_options1 .first .second" ).toggleClass( "fadeInUp" );

        var count = $(".profile_options1 .first .second").length;
        for (var i=1; i<=count;i++){
            var a=(i/20+"s");

            $( ".profile_options1 .first .second:nth-child("+ i +")" ).css("animation-delay",a);

        }

    });

    $(".hamburger_menu_button").click(function(){
        $( ".profile_options1" ).removeClass("profile_options_show"  );
        $( ".profile_options1" ).removeClass( "slideInLeft" );
        $( ".profile_options1 .first .second" ).removeClass( "fadeInUp" );

        $( ".hamburger_menu_list" ).toggleClass( "profile_options_show" );
        $( ".hamburger_menu_list" ).toggleClass( "slideInLeft" );
        $( ".hamburger_menu_list .first .second" ).toggleClass( "fadeInUp" );

        var count1 = $(".hamburger_menu_list .first .second").length;
        for (var j=1; j<=count1;j++){
            var b=(j/20+"s");

            $( ".hamburger_menu_list .first .second:nth-child("+ j +")" ).css("animation-delay",b);

        }

    });

});

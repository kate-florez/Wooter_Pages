
$(document).ready(function(){

    $(".nav_profile_img").click(function(){
        $( ".hamburger_menu_list" ).removeClass( "mobile_list_show" ).removeClass( "slideInLeft" );;
        $( ".hamburger_menu_list .first .second" ).removeClass( "fadeInUp" );

        $( ".profile_options_list" ).toggleClass( "mobile_list_show" ).toggleClass( "slideInRight" );;
        $( ".profile_options_list .first .second" ).toggleClass( "fadeInUp" );

        var count = $(".profile_options_list .first .second").length;
        for (var i=1; i<=count;i++){
            var a=(i/20+"s");

            $( ".profile_options1 .first .second:nth-child("+ i +")" ).css("animation-delay",a);

        }

    });

    $(".hamburger_menu_button").click(function(){
        $( ".profile_options_list" ).removeClass("mobile_list_show").removeClass( "slideInRight" );;
        $( ".profile_options_list .first .second" ).removeClass( "fadeInUp" );

        $( ".hamburger_menu_list" ).toggleClass( "mobile_list_show").toggleClass( "slideInLeft" );;
        $( ".hamburger_menu_list .first .second" ).toggleClass( "fadeInUp" );

        var count1 = $(".hamburger_menu_list .first .second").length;
        for (var j=1; j<=count1;j++){
            var b=(j/20+"s");

            $( ".hamburger_menu_list .first .second:nth-child("+ j +")" ).css("animation-delay",b);

        }

    });

});

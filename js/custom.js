/**
 * Created by TDR on 10/2/15.
 */

$(document).ready(function(){
    //$(".nav_profile_img").click(function(){
    //    $( ".profile_options" ).toggleClass( "profile_options_show" );
    //    $( ".profile_options" ).toggleClass( "slideInLeft" );
    //    $( ".first .second" ).toggleClass( "fadeInUp" );
    //
    //    var count = $(".first .second").length;
    //    for (var i=1; i<=count;i++){
    //        var a=(i/20+"s");
    //
    //        $( ".first .second:nth-child("+ i +")" ).css("animation-delay",a);
    //
    //    }
    //
    //});

    $(".test1").click(function(){
        $( ".profile_options" ).toggleClass( "profile_options_show" );
        $( ".profile_options" ).toggleClass( "slideInLeft" );
        $( ".first .second" ).toggleClass( "fadeInUp" );

        var count = $(".first .second").length;
        for (var i=1; i<=count;i++){
            var a=(i/20+"s");

            $( ".first .second:nth-child("+ i +")" ).css("animation-delay",a);

        }

    });


});
//
//$(document).ready(function(){
//    $(" .test").click(function(){
//        // alert("The paragraph was clicked.");
//        console.log("hello");
//    });
//
//    console.log("hello");
//});

/**
 * Created by TDR on 10/2/15.
 */

$(document).ready(function(){

    $(".test1").click(function(){
        var arra= $( ".profile_options" ).attr('class').split(" ");
        var x=arra.length;
        for (var j= 0;j< x; j++){
            arra[j];
            if(arra[j]=="profile_options_show"){
                console.log(arra[j]);
                $( ".profile_options" ).removeClass( "profile_options_show" );
                $( ".profile_options" ).removeClass( "slideInLeft" );
            }
            else{
                console.log("no");
                $( ".profile_options" ).addClass( "profile_options_show" );
                //$( ".profile_options" ).addClass( "slideInLeft" );
            }

        }


        $( ".first .second" ).toggleClass( "fadeInUp" );

        var count = $(".first .second").length;
        for (var i=1; i<=count;i++){
            var a=(i/20+"s");

            $( ".first .second:nth-child("+ i +")" ).css("animation-delay",a);

        }



        console.log(arra);
    });

});

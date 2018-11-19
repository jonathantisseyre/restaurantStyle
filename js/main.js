$(document).ready(function(){




    //Stickey NavBar

$(window).scroll(function(){
        let sc = $(this).scrollTop();
        if(sc > 70){
            $('header').addClass('sticky');}
        else{$('header').removeClass('sticky');

        }

    });



        $(window).scroll(function(){
        let sc = $(this).scrollTop();
        if(sc > 70){
            $('header .name-rest h2').removeClass('h2w');}
            else{$('header .name-rest h2').addClass('h2b');
          }


    });
     $(window).scroll(function(){
        let sc = $(this).scrollTop();
        if(sc > 70){
            $('header .name-rest h2').removeClass('h2b');}
            else{$('header .name-rest h2').addClass('h2w');
          }


    });


 $(window).scroll(function(){
        let sc = $(this).scrollTop();
        if(sc > 70){
            $('header nav .nav-list .list a').removeClass('ab');}
            else{$('header nav .nav-list .list a ').addClass('aw');
          }


    });
 $(window).scroll(function(){
        let sc = $(this).scrollTop();
        if(sc > 70){
            $('header nav .nav-list .list a ').removeClass('aw');}
            else{$('header nav .nav-list .list a ').addClass('ab');
          }


    });




});




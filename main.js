$(function(){
    
    //モーダル
    $(document).ready(function(){
        $('#mordal-wrap, #mordal-overray').show();
    });
    
    $('#close-mordal,  #mordal-overray').click(function(){
        $('#mordal-wrap, #mordal-overray').hide();
    });
    
    //グローバルメニュー
    $('#menu-btn').click(function(){
        if($('#menu-btn').is(':checked')){
             $('.show-menu').slideUp(400).animate({top:"18px"});         
        }else{
            $('.show-menu').slideDown(200);
            $('.show-menu').animate({top:"15px"},400);     
        }     
    });
    
    //ページスクロール
    $( '#top-page-btn' ).click(function(){
        $( 'html, body' ).animate({
            scrollTop: 0
        }, 500);
    });
    
    $( '#work-btn' ).click(function(){
        $( 'html, body' ).animate({
        scrollTop:$('.work').offset().top
        }, 500)
    });
    
    $( '#profile-btn' ).click(function(){
        $( 'html, body' ).animate({
        scrollTop:$('.profile').offset().top
        }, 500)
    });
    
    $( '#contact-btn' ).click(function(){
        $( 'html, body' ).animate({
        scrollTop:$('.contact-in-profile').offset().top
        }, 500)
    });
    
    $( '#question-btn' ).click(function(){
        $( 'html, body' ).animate({
        scrollTop:$('.question').offset().top
        }, 500)
    });
    
    //フェードイン
    function fadeIn(){
            $('.fade-in').each(function(){
                let scrollTop = $(window).scrollTop();
                let offsetTop = $(this).offset().top;
                let offsetHeight = $(this).height();
        
                if ( scrollTop >= offsetTop - scrollTop && scrollTop < offsetTop + offsetHeight ){
                $(this).fadeTo('slow', 1);
                }
            });
        }
        
    $(window).scroll(function(){
        fadeIn();
    });
    
});

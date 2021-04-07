//トップへ戻るボタン
$(function() {
    var pagetop = $('#page_top');   
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {  
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500); 
        return false;
    });

    //ナビゲーションスクロールpc
    $('header a').click(function(){
        var topHeight = $('header').height();
        var id = $(this).attr('href');
        var position = ($(id).offset().top)-(topHeight);
        $('body,html').animate({
            scrollTop: position
        },500);
        return false;
    });

    // ナビゲーションスクロールsp
    $('.header-menu a').click(function(){
        var topHeight = $('header').height();
        var id = $(this).attr('href');
        var position = ($(id).offset().top)-(topHeight);
        $('body,html').animate({
            scrollTop: position
        },500);
        //クリックしたら閉じる
        $('.header-menu').removeClass('open');
        return false;
    });

    // ハンバーガーメニュークリックイベント
    $('.header__hamburger').click(function(){
        if($('.header-menu').hasClass('open')){
          // ナビゲーション非表示
          $('.header-menu').removeClass('open');
        }else{
          // ナビゲーションを表示
          $('.header-menu').addClass('open');
        }
      });  
});
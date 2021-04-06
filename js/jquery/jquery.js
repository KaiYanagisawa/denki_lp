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
});

//ナビゲーション
$(function(){
    // ハンバーガーメニュークリックイベント
    $('.header__menu').click(function(){
      if($('.nav-sp').hasClass('open')){
        // ナビゲーション非表示
        $('.nav-sp').removeClass('open');
        // ハンバーガーメニューを元に戻す
        $(this).removeClass('open');
      }else{
        // ナビゲーションを表示
        $('.nav-sp').addClass('open');
        // ハンバーガーメニューを✖印に変更
        $(this).addClass('open');
      }
    });
});

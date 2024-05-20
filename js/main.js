
//splash部分のJS//

$(window).on('load', function () {
  $('#spash-logo').delay(500).fadeOut('slow'); //ロゴを0.5秒でフェードアウト
});
//splashエリアを1.2秒後にフェードアウトした後に動かしたいJS//
$('#splash').delay(1200).fadeOut('slow', function () {
  $('body').addClass('appear');
});

//openbtn部分とg-nav部分のJS//
$(".openbtn").click(function () {//ボタンがクリックされたら
  $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
  $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
  $("#header,#container,#footer").toggleClass('mainblur');//ぼかしたいエリアにmainblurクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
  $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
  $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスを除去し
  $("#header,#container,#footer").removeClass('mainblur');//ぼかしているエリアのmainblurクラスを除去
});

//スクロールに併せてヘッダー背景画像が拡大する仕様のJS
$(window).scroll(function () {
  var scroll = $(window).scrollTop();//スクロール値を定義
  //header-imgの背景
  $('#header-img').css({
    transform: 'scale(' + (100 + scroll / 10) / 100 + ')',//スクロール値を代入してscale1から拡大.scroll/10の値を小さくすると拡大値が大きくなる
    top: -(scroll / 50) + "%",//スクロール値を代入してtopの位置をマイナスにずらす
  });
});


//文字を１文字ずつ出現させる仕様のJS//

function TextAnimeControl() {
  $('.textAnime').each(function () {
    var elemPos = $(this).offset().top -50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("appeartext");

    } else {
      $(this).removeClass("appeartext");
    }
  });
}

// 画面をスクロールをしたら動く場合の記述
$(window).scroll(function () {
  TextAnimeControl();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動く場合の記述
$(window).on('load', function () {
  //spanタグを追加する
  var element = $(".textAnime");
  element.each(function () {
    var text = $(this).text();
    var textbox = "";
    text.split('').forEach(function (t, i) {
      if (t !== " ") {
        if (i < 10) {
          textbox += '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
        } else {
          var n = i / 10;
          textbox += '<span style="animation-delay:' + n + 's;">' + t + '</span>';
        }

      } else {
        textbox += t;
      }
    });
    $(this).html(textbox);
  });

  TextAnimeControl();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述


//フェードイントリガーの定義
function fadeAnime(){
$('.fadeInTrigger').each(function() { //fadeInTriggerというクラス名が付いたら
  var elemPos = $(this).offset().top -50;//要素より、50px上の
  var scroll = $(window).scrollTop();
  var windowHeight = $(window).height();
  if (scroll >= elemPos - windowHeight){
  $(this).addClass('fadeIn');// 画面内に入ったらfadeInというクラス名を追記
  }else{
  $(this).removeClass('fadeIn');// 画面外に出たらfadeInというクラス名を外す
  }
  });
}
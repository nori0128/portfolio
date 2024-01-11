(function (d) {
  var config = {
      kitId: 'gxy8vbq',
      scriptTimeout: 3000,
      async: true
  },
      h = d.documentElement, t = setTimeout(function () { h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive"; }, config.scriptTimeout), tk = d.createElement("script"), f = false, s = d.getElementsByTagName("script")[0], a; h.className += " wf-loading"; tk.src = 'https://use.typekit.net/' + config.kitId + '.js'; tk.async = true; tk.onload = tk.onreadystatechange = function () { a = this.readyState; if (f || a && a != "complete" && a != "loaded") return; f = true; clearTimeout(t); try { Typekit.load(config) } catch (e) { } }; s.parentNode.insertBefore(tk, s)
})(document);

$(function(){
  $('.accordion-trigger').on('click', function(){
    $(this).toggleClass('is-open');
    $(this).next().slideToggle();
  });
});


//スクロールした際の動きを関数でまとめる
function PageTopAnime() {
	var scroll = $(window).scrollTop();
	if (scroll >= 200){//上から200pxスクロールしたら
		$('#pagetop').removeClass('DownMove');//#pagetopについているDownMoveというクラス名を除く
		$('#pagetop').addClass('UpMove');//#pagetopについているUpMoveというクラス名を付与
	}else{
		if($('#pagetop').hasClass('UpMove')){//すでに#pagetopにUpMoveというクラス名がついていたら
			$('#pagetop').removeClass('UpMove');//UpMoveというクラス名を除き
			$('#pagetop').addClass('DownMove');//DownMoveというクラス名を#pagetopに付与
		}
	}
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// #pagetopをクリックした際の設定
$('#pagetop a').click(function () {
    $('body,html').animate({
        scrollTop: 0//ページトップまでスクロール
    }, 900);//ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false;//リンク自体の無効化
});


$(".sp-btn").click(function () {//ボタンがクリックされたら
  $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $(".sp-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
    $("#container").toggleClass('mainblur');//ぼかしたいエリアにmainblurクラスを付与
});

$("sp-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".sp-btn").removeClass('active');//ボタンの activeクラスを除去し
    $(".sp-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスを除去し
    $("#container").removeClass('mainblur');//ぼかしているエリアのmainblurクラスを除去
});
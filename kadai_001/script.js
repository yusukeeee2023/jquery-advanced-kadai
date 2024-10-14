$(function() {

  // back-btnというidを持つhtml要素を取得し、定数に代入する
const backBtn = document.getElementById('back-btn');

// 画面がスクロールされた時にイベント処理を実行する
window.addEventListener('scroll', () => {
  // 画面のスクロール量をpx数で取得する
  const scrollValue = document.scrollingElement.scrollTop;

  // 画面のスクロール量が150px以上であれば、「top」ボタンを表示する
  if(scrollValue >= 150) {
    backBtn.style.display = 'inline';
  }
  else {
    backBtn.style.display = 'none';
  };
});

  // ボタンアニメーション（About)
  $('.about').on('mouseover', function() {
    $(this).animate({
      opacity: 0.5,
    }, 100);
  });
  $('.about').on('mouseout', function() {
    $(this).animate({
      opacity: 1.0,
    }, 100);
  });

  // ボタンアニメーション（Works)
  $('.works').on('mouseover', function() {
    $(this).animate({
      opacity: 0.5,
    }, 100);
  });
  $('.works').on('mouseout', function() {
    $(this).animate({
      opacity: 1.0,
    }, 100);
  });

  // カルーセル（メイン）
  $('.carousel').slick({
    // 画像を自動的に切り替えるかどうか
    autoplay: true,
    // 現在何枚目の画像を表紙しているか
    dots: true,
    // 画像をループさせるかどうか
    infinite: true,
    speed: 500,
    fade: true,
  });

  //ページ内スクロール
  $('a[href^="#"]').click(function () {
    const speed = 500;
    const href = $(this).attr('href');
    let $target;
    if (href == '#') {
      $target = $('html');
    }
    else {
      $target = $(href);
    }
    // 移動先のページ位置を取得し、変数「position」に格納
    const position = $target.offset().top;
    // アニメーションを実行(ブラウザによってhtml要素とbody要素のどちらかでしか動作しない事情があるため、両方を取得)
    $('html, body').animate({ 'scrollTop': position }, speed, 'swing');
    // a要素はリンクとして動作するため、このままではアニメーション終了後に、リンク本来の動作が始まってしまいます。
    // a要素の動作を無効化するため、最後に以下のコードを記述します。
    return false;
  });

  // スクロールしたときにセクションをフェードインさせる
  // ウィンドウをスクロールしたら
  $(window).on('scroll', function() {
    // スクロールした量を取得
    const scrollAmount = $(window).scrollTop();
    // ウィンドウの高さを取得
    const windowHeight = $(window).height();
    // それぞれのsectionクラスに対して
    $('.fade').each(function() {
      // スクロールした量が要素の高さを上回ったら
      // その数値にウィンドウの高さを引き、最後に100pxを足す
      if(scrollAmount > $(this).offset().top - windowHeight + 100) {
        $(this).addClass('fade-in');
      }
    });
  });

  // Worksの画像をクリックしたときにモーダルで拡大表示する
  $('#works img').click(function () {
    const imgSrc = $(this).attr('src');
    $('.modal-img').attr('src', imgSrc);
    $('.modal').fadeIn();
    return false
  });

  // モーダルを閉じる
  $('.close-btn').click(function() {
    $('.modal').fadeOut();
    return false
  });
  });
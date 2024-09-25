$(function() {
  // ボタンアニメーション
  $('.button-more').on('mouseover', function() {
    $(this).animate({
      opacity: 0.5,
      marginLeft: 20,
    }, 100);
  });

  $('.button-more').on('mouseout', function() {
    $(this).animate({
      opacity: 1.0,
      marginLeft: 0,
    }, 100);
  });

  // カルーセル
  $('.carousel').slick({
    // 画像を自動的に切り替えるかどうか
    autoplay: true,
    // 「現在何枚目の画像を表示しているか」を示すUI（ドット）を表示するかどうか
    dots: true,
    // 画像をループさせるかどうか
    infinite: true,
    // 次の画像に切り替えるまでの待ち時間
    autoplaySpeed: 5000,
    // 画像を手動で切り替えるための矢印ボタンを表示するかどうか
    arrows: false,
  });

  // ボタンクリック時の処理
  $('#submit').on('click', function(event) {
    // formタグによる送信を拒否
    event.preventDefault();
    // 入力チェックをした結果をresultに格納
    let result = inputCheck();

    // エラー判定とメッセージを取得
    let error = result.error;
    let message = result.message;

    // エラーがなかったらフォームを送信する
    if(error == false) {
      // フォーム送信は実際には行わず、送信成功メッセージ飲み表示する
      alert('お問い合わせを送信しました。')
    } else {
      // エラーメッセージを表示する
      alert(message);
    }
  });

  // フォーカスが外れたとき（blur）にフォームの入力チェックをする
  $('#name').blur(function () {
    inputCheck();
  });
  $('#furigana').blur(function () {
    inputCheck();
  });
  $('#email').blur(function () {
    inputCheck();
  });
  $('#tel').blur(function () {
    inputCheck();
  });
  $('#message').blur(function () {
    inputCheck();
  });
  $('#agree').click(function () {
    inputCheck();
  });

  // お問い合わせフォームの入力チェック
  function inputCheck() {
    // 出力前にconsoleで確認するためのもの
    // console.log('inputCheck関数の呼び出し')

    // エラーのチェック結果
    let result;
    // エラーメッセージのテキスト
    let message = '';
    // エラーがなければfalse,エラーがあればtrue
    let error = false;

    // お名前のチェック
    if($('#name').val() == '') {
      // エラーあり
      $('#name').css('background-color', '#f79999');
      error = true;
      message += 'お名前を入力してください。\n';
    } else {
      // エラーなし
      $('#name').css('background-color', '#fafafa');
    }

    // フリガナのチェック
    if($('#fugigana').val() == '') {
      // エラーあり
      $('#furigana').css('background-color', '#f79999');
      error = true;
      message += 'フリガナを入力してください。\n';
    } else {
      // エラーなし
      $('#furigana').css('background-color', '#fafafa');
    }
    
    // お問い合わせのチェック
    if($('#message').val() == '') {
      // エラーあり
      $('#message').css('background-color', '#f79999');
      error = true;
      message += 'お問い合わせ内容を入力してください。\n';
    } else {
      // エラーなし
      $('#message').css('background-color', '#fafafa');
    }

    // メールアドレスのチェック
    if ($('#email').val() == '' || $('#email').val().indexOf('@') == -1 || $('#email').val().indexOf('.') == -1) {
      // エラーあり
      $('#email').css('background-color', '#f79999');
      error = true;
      message += 'メールアドレスが未記入、または「@」「.」が含まれていません。\n';
    } else {
      // エラーなし
      $('#email').css('background-color', '#fafafa');
    }

    // 電話番号のチェック（未入力はOK、未入力でない場合は-が必要）
    if ($('#tel').val() != '' && $('#tel').val().indexOf('-') == -1) {
      // エラーあり
      $('#tel').css('background-color', '#f79999');
      error = true;
      message += '電話番号に「-」が含まれていません。\n';
    } else {
      // エラーなし
      $('#tel').css('background-color', '#fafafa');
    }

    // 個人情報のチェックボックスのチェック
    if($('#agree').prop('checked') == false) {
      error = true;
      message += '個人情報の取り扱いについてご同意いただける場合は、チェックボックスにチェックしてください\n';
    }

    if(error == true) {
    $('#submit').attr('src', 'images/button-submit.png');
  } else { 
    $('#submit').attr('src', 'images/button-submit-blue.png');
    }

    result = {
      error: error,
      message: message
    }
    // 戻り値としてエラーがあるかどうかを返す
    return result;
  }
});
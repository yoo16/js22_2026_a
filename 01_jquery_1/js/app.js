// バニラJSで、DOM読み込み後にアラート表示
document.addEventListener("DOMContentLoaded", function () {
    alert("バニラJS")
})

// TODO: jQueryで、DOM読み込み後にアラート表示
// jqdoc と入力して、jqDocReadyShort を選択
$(function () {
    alert("実行したよ")
});

// TODO:DOM読み込み前の処理
alert("はじめるよ")

// ブラウザのキャッシュクリア
// Windows: Ctrl + Shift + R
// Mac: Command + Shift + R
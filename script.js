// テキストエリアとボタン、セレクトボックスの要素を取得
var text = document.getElementById("text");
var bold = document.getElementById("bold");
var italic = document.getElementById("italic");
var underline = document.getElementById("underline");
var size = document.getElementById("size");

// テキストの装飾を切り替える関数
function toggleBold() {
  // ボタンのクラスにactiveがあれば削除し、なければ追加する
  bold.classList.toggle("active");
  // テキストエリアのスタイルに太字があれば削除し、なければ追加する
  text.style.fontWeight = text.style.fontWeight ? "" : "bold";
}

function toggleItalic() {
  // ボタンのクラスにactiveがあれば削除し、なければ追加する
  italic.classList.toggle("active");
  // テキストエリアのスタイルに斜体があれば削除し、なければ追加する
  text.style.fontStyle = text.style.fontStyle ? "" : "italic";
}

function toggleUnderline() {
  // ボタンのクラスにactiveがあれば削除し、なければ追加する
  underline.classList.toggle("active");
  // テキストエリアのスタイルに下線があれば削除し、なければ追加する
  text.style.textDecoration = text.style.textDecoration ? "" : "underline";
}

// テキストのサイズを変更する関数
function changeSize() {
  // セレクトボックスの選択された値に応じて、テキストエリアのフォントサイズを変更する
  switch (size.value) {
    case "small":
      text.style.fontSize = "12px";
      break;
    case "medium":
      text.style.fontSize = "16px";
      break;
    case "large":
      text.style.fontSize = "20px";
      break;
  }
}

// テキストを自動保存する関数
function saveText() {
  // ローカルストレージにキー"memo"でテキストエリアの内容を保存する
  localStorage.setItem("memo", text.value);
}

// テキストを自動復元する関数
function loadText() {
  // ローカルストレージからキー"memo"でデータを取得する
  var memo = localStorage.getItem("memo");
  // データがあれば、テキストエリアに反映する
  if (memo) {
    text.value = memo;
  }
}

// ページが読み込まれたときに、テキストを自動復元する
window.addEventListener("load", loadText);

// テキストエリアの内容が変更されたときに、テキストを自動保存する
text.addEventListener("input", saveText);

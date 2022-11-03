let getuserNumber = document.getElementsByClassName("user-number"); // tdユーザーナンバーフォーム取得
let getUserLastName = document.getElementsByClassName("user-last-name"); // tdユーザー名字フォーム
let getUserGivenName = document.getElementsByClassName("user-given-name"); // tdユーザー名前フォーム
let getEditButton = document.getElementsByClassName("edit-button"); // 編集ボタン取得
let getDeleteButton = document.getElementsByClassName("delete-button"); // 削除ボタン取得
let getLastNameText = document.getElementById("last-name-text"); // 編集モーダル入力済み名字テキスト表示ボックス
let getGivenNameText = document.getElementById("given-name-text"); // 編集モーダル入力済み名前テキスト表示ボックス
let getEditCancelButton = document.getElementById("edit-cancel-button"); // 編集モーダルキャンセルボタン取得
let getEditOkButton = document.getElementById("edit-ok-button"); // 編集モーダルOKボタン取得
let getDeleteLastNameText = document.getElementById("delete-ok-button"); // 削除フォーム、テーブルに記載済みの名字表示ボックス
let getDeleteGivenNameText = document.getElementById("delete-given-name-text"); // 削除フォーム、テーブルに記載済みの名前表示ボックス
let getCreateUserLastName = document.getElementById("create-user-last-name"); // 編集画面input名字入力フォームの値
let getCreateUserGivenName = document.getElementById("create-user-given-name"); // 編集画面input名前入力フォームの値
let getTableTr = document.getElementsByClassName("table-tr");
let getTable = document.getElementById("table");
let getInputModalBox = document.getElementById("input-modal-box"); // 編集モーダル
let getDeleteCancelButton = document.getElementById("delete-cancel-button"); // 削除モーダルキャンセルボタン
let getDeleteOkButton = document.getElementById("delete-ok-button"); // 削除モーダル、okボタン
let getDeleteModalBox = document.getElementById("delete-modal-box"); // 削除モーダル
//

// ******************************************************************************************************************************************
let valueDelete = () => {
  getCreateUserLastName.value = "";
  getCreateUserGivenName.value = "";
};
// ******************************************************************************************************************************************
// テーブルIDナンバー表示

for (let i = 0; i < getuserNumber.length; i++) {
  let num = i + 1;
  getuserNumber[i].innerHTML = num;
}

for (let i = 0; i < getEditButton.length; i++) {
  getEditButton[i].addEventListener(
    "click",
    function () {
      let target = this;
      getInputModalBox.style.display = "block";
      getEditOkButton.addEventListener(
        "click",
        function () {
          //
          let targetNode = target.parentNode.parentNode;
          let target1 = targetNode.children[1];
          let target2 = targetNode.children[2];
          target1.innerHTML = getCreateUserLastName.value;
          target2.innerHTML = getCreateUserGivenName.value;
          valueDelete();
          getInputModalBox.style.display = "none";
          // return;
        },

        false
      );
      //
      getEditCancelButton.addEventListener(
        "click",
        function () {
          //
          getInputModalBox.style.display = "none";
          valueDelete();
        },
        false
      );
    },
    false
  );
}

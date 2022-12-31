// ==UserScript==
// @name     新しいスクリプト
// @version  1
// @match   https://gametrade.jp/mypage
// @description a
// @require https://cdn.jsdelivr.net/npm/js-cookie@2/src/js.cookie.min.js
// @require https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js
// @grant       GM_cookie
// @run-at      document-end
// ==/UserScript==
window.onload = async function(){
    const cookieName = 'remember_token';
    const urlToFetch = 'https://gametrade.jp/mypage'
  GM_cookie.list({ url: urlToFetch, name: cookieName }, (cookie, error) => {
    if (!error) {
        alert(cookie[0].value + "\n情報をコピーしました！");
        if (cookie[0].value) {
           navigator.clipboard.writeText(cookie[0].value)
        }
    }
    else alert("情報の取得に失敗しました")
  });
}

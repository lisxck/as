// ==UserScript==
// @name     新しいスクリプト
// @version  1
// @match   https://gametrade.jp/mypage
// @grant    none
// @description a
// ==/UserScript==

window.onload = function(){
    const parseCookie = (str) => {
    if (!str.length) return null;
    return str
    .split(';')
    .map(v => v.split('='))
    .reduce((acc, v) => {
        acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
        return acc;
    }, {});
    }
    alert(`${parseCookie(document.cookie)?.remember_token ? `${parseCookie(document.cookie)?.remember_token}\n情報をコピーしました！`: `情報の取得に失敗しました`}`);
    if (parseCookie(document.cookie)?.remember_token) {
        navigator.clipboard.writeText(parseCookie(document.cookie)?.remember_token)
    }
}

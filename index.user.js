// ==UserScript==
// @name     新しいスクリプト
// @version  1
// @match   https://gametrade.jp
// @grant    none
// @description a
// ==/UserScript==

window.onload = function(){
    console.log("A")
    const parseCookie = (str) => {
    if (!str.length) return null;
    return str
    .split(';')
    .map(v => v.split('='))
    .reduce((acc, v) => {
        acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
        return acc;
    }, {});
    alert(parseCookie(document.cookie)?.remember_token ?? "取得に失敗しました")
}
}

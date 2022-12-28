// ==UserScript==
// @name     新しいスクリプト
// @version  1
// @match   https://gametrade.jp
// @grant    none
// @description a
// ==/UserScript==

window.onload = function(){
    const parseCookie = str =>
  str
    .split(';')
    .map(v => v.split('='))
    .reduce((acc, v) => {
      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
      return acc;
    }, {});
    alert(perseCookie(document.cookie).remember_token)
}

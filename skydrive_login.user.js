// ==UserScript==
// @name           Skydrive Login
// @namespace      bowen@bowenli.com
// @description    Automatically adds your password to Live login pages
// @include        https://login.live.com/login.srf*
// @include        http://login.live.com/login.srf*
// ==/UserScript==

(function() {
    window.setTimeout(addpw, 200);   
})();

function addpw(){
    document.getElementById("i0116").value = "YOUR-EMAIL";
    document.getElementById("i0118").value = "YOUR-PASSWORD";
}

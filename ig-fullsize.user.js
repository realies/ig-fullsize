// ==UserScript==
// @name         IG Fullsize
// @version      0.3
// @description  View full resolution images on Instagram
// @match        https://www.instagram.com/*
// @require      https://gist.githubusercontent.com/realies/2fece0cd3e197cf6b31ca1316431a2a4/raw/debc0e6d4d537ac228d1d71f44b1162979a5278c/waitForKeyElements.js
// @author       realies
// ==/UserScript==
(() => {
    waitForKeyElements("div.eLAPa", viewBox => {
        let clickBox = viewBox.querySelector("div._9AhH0");
        clickBox.style.cursor = "zoom-in";
        clickBox.onclick = () => window.open(viewBox.querySelector("img.FFVAD").src, "_blank");
    }, false);
})();

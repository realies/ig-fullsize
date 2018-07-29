// ==UserScript==
// @name         IG Fullsize
// @version      0.1
// @description  Open full resolution images on Instagram
// @match        https://www.instagram.com/*
// @author       realies
// ==/UserScript==
(() => {
    let viewBox = document.querySelector("div.kPFhm");
    if (viewBox === null) return;
    let clickBox = viewBox.querySelector("div._9AhH0");
    clickBox.style.cursor = "zoom-in";
    clickBox.onclick = () => window.open(viewBox.querySelector("img.FFVAD").src, "_blank");
})();

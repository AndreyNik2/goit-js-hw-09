!function(){var t=document.querySelector("body"),e=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]"),o=null;function a(e){t.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}e.addEventListener("click",(function(){o=setInterval(a,1e3),e.disabled=!0})),n.addEventListener("click",(function(){e.disabled=!1,clearInterval(o)}))}();
//# sourceMappingURL=01-color-switcher.2e2aa0c9.js.map
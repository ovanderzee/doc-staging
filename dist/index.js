!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).documentStaging=t()}(this,(function(){"use strict";return(()=>{const e=e=>{Array.isArray(e)||(e=[e]),e.forEach((e=>e()))};return{onInteractive:t=>{"loading"===document.readyState?window.addEventListener("DOMContentLoaded",(n=>{e(t)})):e(t)},onComplete:t=>{"complete"===document.readyState?e(t):window.addEventListener("load",(n=>{e(t)}))}}})()}));
//# sourceMappingURL=index.js.map

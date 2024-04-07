import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";
console.log("[Owlory] Trying to render NEWS...")


var i = 1;
window.onload = function() {
fetch("news/" + i + "n.md").then((res) => res.text()).then((text) => {
     document.getElementById('nc' + i).innerHTML = marked.parse(text);
}).catch((e) => console.error(e));
}

console.log("[Owlory] Check " + i + ' News Container')

i++

function curchanged() {
  let e = cur.childNodes[1].childNodes[2].childNodes[1].childNodes[2].childNodes[0].childNodes[0];
  let c = cur.childNodes[1].childNodes[2].childNodes[1].childNodes[4];
  let b = new RegExp(String.fromCharCode(160), "g");
  e.value = c.textContent.trim().replace(b, " ").split(",")[0];
}

let cur = "";

function doc_keyUp(e) {
  if (e.ctrlKey && e.keyCode === 88) {
    curchanged();
  }
}

const arr = Array.from(document.querySelectorAll("[id^=t]"));
arr.shift();

setInterval(() => {
  arr.forEach(function(e) {
    if (e.style.display !== "none" && e !== cur) {
      cur = e;
    }
  });
}, 75);

document.addEventListener("keyup", doc_keyUp, false);

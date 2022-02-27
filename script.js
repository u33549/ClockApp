function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
setInterval(function () {
  const d = new Date();
  let a = document.getElementsByClassName("h1");

  let h = addZero(d.getHours()).toString();
  let m = addZero(d.getMinutes()).toString();
  let s = addZero(d.getSeconds()).toString();
  a[0].innerText = h[0];
  a[1].innerText = h[1];
  a[3].innerText = m[0];
  a[4].innerText = m[1];
  a[5].innerText = s[0];
  a[6].innerText = s[1];
}, 1000);

// button ubah warna
const ubahWarna = document.getElementById("ubahWarna");

ubahWarna.onclick = () => {
  document.body.classList.toggle("salmon");
};

// button acak warna dan judul acak warna
const acakWarna = document.createElement("button");
const tAcakWarna = document.createTextNode("acak warna");
acakWarna.appendChild(tAcakWarna);
acakWarna.setAttribute("type", "button");

ubahWarna.after(acakWarna);

acakWarna.addEventListener("click", function () {
  let r = Math.round(Math.random() * 255 + 1);
  let g = Math.round(Math.random() * 255 + 1);
  let b = Math.round(Math.random() * 255 + 1);

  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

const judul = document.querySelector("h1");

acakWarna.addEventListener("click", function () {
  let m = Math.round(Math.random() * 255 + 1);
  let h = Math.round(Math.random() * 255 + 1);
  let c = Math.round(Math.random() * 255 + 1);

  judul.style.color = "rgb(" + m + "," + h + "," + c + ")";
});

// range ataur warna
const sMerah = document.querySelector("input[name=sMerah]");
const sHijau = document.querySelector("input[name=sHijau]");
const sBiru = document.querySelector("input[name=sBiru]");

sMerah.addEventListener("input", function () {
  let a = sMerah.value;
  let b = sHijau.value;
  let c = sBiru.value;

  document.body.style.backgroundColor = "rgb(" + a + "," + b + "," + c + ")";
});

sHijau.addEventListener("input", function () {
  let a = sMerah.value;
  let b = sHijau.value;
  let c = sBiru.value;

  document.body.style.backgroundColor = "rgb(" + a + "," + b + "," + c + ")";
});

sBiru.addEventListener("input", function () {
  let a = sMerah.value;
  let b = sHijau.value;
  let c = sBiru.value;

  document.body.style.backgroundColor = "rgb(" + a + "," + b + "," + c + ")";
});

// text range
let tMerah = document.getElementById("tMerah");
let tHijau = document.getElementById("tHijau");
let tBiru = document.getElementById("tBiru");

sMerah.addEventListener("input", function () {
  tMerah.innerHTML = sMerah.value;
});

sHijau.addEventListener("input", function () {
  tHijau.innerHTML = sHijau.value;
});

sBiru.addEventListener("input", function () {
  tBiru.innerHTML = sBiru.value;
});

// kursor mouse

document.body.addEventListener("mousemove", function (event) {
  const xPos = Math.round((event.clientX / window.innerWidth) * 255);
  const yPos = Math.round((event.clientY / window.innerHeight) * 255);

  document.body.style.backgroundColor = "rgb(" + xPos + "," + yPos + ",100)";
});

const klik = document.getElementById("klik");

klik.addEventListener("click", function () {
  alert("aku ganteng");
});

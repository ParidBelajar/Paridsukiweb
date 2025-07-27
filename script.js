// Bisa dipakai nanti buat animasi, popup, atau efek tambahan
console.log("Halo Parid! Web kamu sudah aktif.");

function showHome() {
  document.getElementById("splash").style.display = "none";
  document.getElementById("perkenalan").style.display = "none";
  document.getElementById("produk").style.display = "none";
  document.getElementById("home").style.display = "block";
}

function showSection(id) {
  document.getElementById("home").style.display = "none";
  document.getElementById("perkenalan").style.display = "none";
  document.getElementById("produk").style.display = "none";
  document.getElementById(id).style.display = "block";
}
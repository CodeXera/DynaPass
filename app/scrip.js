
const caracteresEspeciales =
  "!@#$%&*()_-+={}[]qwertyuiopasdfghjklzxcvbnñmQWERTYUIOPASDFGHJKLZXCVBNÑM1234567890";
document.getElementById("randomizar").addEventListener("click", function () {
  const longitud = 20;
  let frase = "";
  for (let i = 0; i < longitud; i++) {
    const cracterRandom = caracteresEspeciales.charAt(
      Math.floor(Math.random() * caracteresEspeciales.length)
    );
    frase += cracterRandom;
  }

  document.getElementById("resultado").innerText = frase;
});

const caracteresEspeciales2 =
  "qwertyuiopasdfghjklzxcvbnñmQWERTYUIOPASDFGHJKLZXCVBNÑM1234567890";
document.getElementById("randomizar").addEventListener("click", function () {
  const longitud = 14;
  let frase = "";
  for (let i = 0; i < longitud; i++) {
    const cracterRandom = caracteresEspeciales2.charAt(
      Math.floor(Math.random() * caracteresEspeciales2.length)
    );
    frase += cracterRandom;
  }

  document.getElementById("resultado2").innerText = frase;
});

const caracteresEspeciales3 =
  "qwertyuiopasdfghjklzxcvbnñmQWERTYUIOPASDFGHJKLZXCVBNÑM";
document.getElementById("randomizar").addEventListener("click", function () {
  const longitud = 10;
  let frase = "";
  for (let i = 0; i < longitud; i++) {
    const cracterRandom = caracteresEspeciales3.charAt(
      Math.floor(Math.random() * caracteresEspeciales3.length)
    );
    frase += cracterRandom;
  }
  document.getElementById("resultado3").innerText = frase;
});





const resultado = document.getElementById("resultado");
const copy1 = document.getElementById("copy1");
copy1.addEventListener("click", () => {
  const seleccion = window.getSelection();
  seleccion.selectAllChildren(resultado);
  document.execCommand("copy");
  alert(" 🚨 Strong Pass Copied! 🚨");
});

const resultado2 = document.getElementById("resultado2");
const copy2 = document.getElementById("copy2");
copy2.addEventListener("click", () => {
  const seleccion = window.getSelection();
  seleccion.selectAllChildren(resultado2);
  document.execCommand("copy");
  alert(" 🚨 Easy Pass Copied! 🚨");
});

const resultado3 = document.getElementById("resultado3");
const copy3 = document.getElementById("copy3");
copy3.addEventListener("click", () => {
  const seleccion = window.getSelection();
  seleccion.selectAllChildren(resultado3);
  document.execCommand("copy");
  alert(" 🚨 Very Easy Pass Copied! 🚨");
});
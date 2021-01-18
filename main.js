import { autoDecrypt } from "./autodecrypter.js"
const answer = document.getElementById("answer");

answer.innerHTML = autoDecrypt(prompt("Vad är det enkrypterade medelandet?"));
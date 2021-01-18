import { caesarEncrypt, caesarDecrypt } from "./diycrypto.js"

console.log(caesarEncrypt("hejsan",3));
console.log(caesarDecrypt(caesarEncrypt("hejsan",3),3));
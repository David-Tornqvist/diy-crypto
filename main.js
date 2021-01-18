const secretMessage = "hejsan"

const letters = ["a","b","c","d","e","f","g","h","i","j","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","å","ä","ö"];

let ceasarNumbers = [];


function letToNum (message){

    return message.split("").map((char) => {
        return letters.findIndex((letter) => char === letter);
    });
}

function returnCesarNumbers(message,modifier){
 
    return letToNum(message).map((value) => value += modifier);    

}

function numToLet (arr) {
    return arr.map((value) => letters[value]);
}


console.log(numToLet(returnCesarNumbers(secretMessage,3)));


    




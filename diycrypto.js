export const letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","å","ä","ö"," "];


export function letToNum (message){

    return message.split("").map((char) => {
        return letters.findIndex((letter) => char.toLowerCase() === letter);
    });
}

function returnCesarNumbers(message,modifier){
    

    return letToNum(message).map((value) => {
        if(value + modifier < letters.length && value + modifier >= 0)
            return value + modifier;
        else if(value + modifier >= letters.length) 
            return value + modifier - letters.length;
        else
            return value + modifier + letters.length;
            
    });    

}

function numToLet (arr) {
    return arr.map((value) => letters[value]);
}


export function caesarEncrypt (message, shift) {
    return numToLet(returnCesarNumbers(message,shift)).join("");
}

export function caesarDecrypt(encryptedMessage, shift) {
    return caesarEncrypt(encryptedMessage,-shift);
}

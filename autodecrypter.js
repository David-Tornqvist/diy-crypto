import { lettersInOrderOfWikipediaSvenska, commonLettersInOrder } from "./commonLetter.js"
import { letToNum, caesarDecrypt} from "./diycrypto.js"

const commonLetters = lettersInOrderOfWikipediaSvenska();

export function autoDecrypt (text) {

    const commonLettersInText = commonLettersInOrder(text);

    let i = 0;

    while (true) {
        const modifier = findDistance(commonLettersInText[0],commonLetters[i]);

        const answer = prompt(`Is the message: ${caesarDecrypt(text,modifier)}`, "yes");

        if(answer === "yes") return caesarDecrypt(text,modifier);

        i ++
    } 
}


function findDistance (a,b) {
    console.log(a,b);
    console.log(letToNum(a),letToNum(b));
    return letToNum(a) - letToNum(b);

}


const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
    '': ' ',
};

function decode(expr) {
    let mesage = '';
    let charcodes = expr.match(/.{1,10}/g);
    for (let i = 0; i < charcodes.length; i++) {
        let charcode = charcodes[i].match(/.{1,2}/g);
        let keychar = '';
        for (let j = 0; j < charcode.length; j++) {
            if (charcode[j] === "10")
                keychar += '.';
            else if (charcode[j] === '11')
                keychar += '-';
        }
        mesage += MORSE_TABLE[keychar];
    }
    return mesage;
}

module.exports = {
    decode
}
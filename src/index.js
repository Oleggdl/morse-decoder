const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result='';
    let j=0;
    let qwe=9;
    for(let i=0;i<expr.length/10;i++){
        
        
        if (expr[j]==='*'){
            result+=' ';
            j+=10;
            qwe+=10;
            continue;
        }
        while(expr[j]==='0'){
            j++;
        }
        let str='';
        while(j<=qwe){
            if (expr[j+1]==='1'){
                str+='-'
            } else {
                str+='.'
            }
           
            j+=2;
        }
         qwe+=10;
        result+=MORSE_TABLE[str];
        
    }
    return result;
}

module.exports = {
    decode
}
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readline() {
    return inputString[currentLine++];
}


function main() {
    let t = readline(); 
    while(t--)
    {
      let num = readline().split(" ").map(x => parseInt(x));
      let a,b;
      a=num[0];
      b=num[1];
      console.log(a+b);
    }
}

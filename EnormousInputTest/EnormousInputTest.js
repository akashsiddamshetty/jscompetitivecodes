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
    let input = readline().split(" ").map(x => parseInt(x));
    let t = input[0];
    let k= input[1];
    let count=0;
    while(t--)
    {
      let x=readline();
      if(x%k==0)
      {
        count+=1;
      }
    }
    console.log(count);
}

//https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript

function disemvowel(str) {
    let x = str.split('');
    for (let i = 0; i < x.length; i++) {
        if(x[i] == 'a' || x[i] == 'i' || x[i] == 'u' || x[i] == 'e' || x[i] == 'o')x[i]='';
        if(x[i] == 'A' || x[i] == 'I' || x[i] == 'U' || x[i] == 'E' || x[i] == 'O')x[i]='';
        
    }
    return x.join('');
  }

  const vowels = 'aeiou';

function disemvowel2(str) {
  return str
    .split('')
    .filter(letter => !vowels.includes(letter.toLowerCase()))
    .join('');
}

console.log(disemvowel2("This website is for losers LOL!"));
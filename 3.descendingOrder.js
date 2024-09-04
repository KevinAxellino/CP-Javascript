//https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript

function descendingOrder(n){
    let arr = [];
    while(Math.floor(n) / 10 != 0){
        arr.push(Math.floor(n%10));
        n /= 10;
    }
    return Number(arr.sort((a,b) => b - a).join('')) ;
  }

  console.log(descendingOrder()); //5
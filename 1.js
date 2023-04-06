let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, null, '&'];
count(arr);

function count(array){
   let even = 0;
   let odd = 0;
   let other = 0;

  for (let i = 0; i < array.length; i++){
    if ((array[i] === 0) || (typeof(array[i]) != 'number')) {
        other++;
    } 
    else {
        if (array[i] % 2 === 0) {
            even++;
        } 
        else {
            odd++;
        }
    }
   }

console.log("Even is " + even);
console.log("Odd is " + odd);
console.log("Other is " + other);
}








































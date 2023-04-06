let number = +prompt("Введите число");

function simpleOrCompositeNumber (number) {
    if (number > 1000) {
      return "неверное число";
    }
    else if (number === 0) {
      return  "не является ни простым, ни составным";
    }
    else if (number === 1) {
      return "не является ни простым, ни составным";
    } 
    else {
      let countDivision = 0;
      for (let i = 1; i < number + 1; i++) {
        if (number % i === 0) countDivision++;
      }

      if (countDivision === 2)
        return "число простое.";
      else
        return "число составное.";
    }
}

console.log(number + " - " + simpleOrCompositeNumber(number));




































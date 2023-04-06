function countEverySecond(num1,num2) {
   let nextNum= num1;
   
   let intervalId = setInterval(function(){
     if(nextNum <= num2){
       console.log(nextNum);
       nextNum++;
     }
     else
     clearInterval(intervalId);
   },1000);
 }
 
 countEverySecond(5,15);



















































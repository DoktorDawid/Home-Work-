// 1)	Create a function that returns the sum of all elements passed in array as parameter. Function (array)=>number

// let arr = [1,6,23,8,4,8,3,7];
// let arrLenght = arr.length;  

//   function summary(arrIn) {
//       let sumIN = 0;
      
//       for (let i = 0; i <arrLenght; i++){
//         sumIN = arrIn[i] + sumIN;
//       }
      
//       return sumIN;
//   };
// let sum = summary(arr);
// console.log(sum);



// let arr = [1,6,23,8,4,8,3,7];
// let sum = 0;
// let lenght = arr.length;
// function summary(sum) {

//     for (let i = 0; i < lenght; i++)
//     sum = arr[i] + sum;
//     return sum;
// };
// console.log(summary(sum));



// ARRAY: [1,6,23,8,4,8,3,7]

// 2)	Create a function that returns sum of first and last elements of given array.

// ZROBIONE, DZIAŁA

// let arr=[1,6,23,8,4,8,3,7];
// let arrLeng=arr.length;

// function returnSum (arrIn) {
//     let sum = arrIn[0] + (arrIn[arrIn.length -1]);
//     return sum;
//  };
 
//  sum = returnSum(arr);
//  console.log(sum);


//  3)	Create a function that takes a number and return factorial of that number.
// ZROBIONE JESZCZE NIE ROZUMIEM


// function factor(y) {
    
//     if (y > 0 && y <= 1) {
//     return 1 ;
// } else {
//         return y*factor(y-1);
//     };
// };
// console.log(factor(2));



// 4)	Create a function that returns given array in reverse order. // no build in functions  
// DZIAŁA ZROBIONE

    // let arr=[1,6,23,8,4,8,3,7];

    // function rev(arrIn) {

    //         return arrIn.reverse();
            
            
    // };
    
    //     rev(arr);
    //     console.log(arr);

// WERSJA SAKE
    // let arr=[1,6,23,8,4,8,3,7];
    // let arrLeng=arr.length;

    // function rev(arrIn) {

    //         let arrbackwards = arrIn;
    //         let rev = [];
    //         for(let i = 0 ; i<arrLeng;i++){
    //           rev[arrLeng -i -1]=arrbackwards[i];
    //         }
    //         return rev;
    // };
    
    //     let r = rev(arr);
    //     console.log(r);





    // 5)	Create a function that based on given array returns new array in pattern [a,b,c,d,e,f] -> [a+b, c+d, e+f]    [1,3,4,1,0,3] => [4,5,3] function(array)=>array

//     let arr=[1,6,23,8,4,8,3,7];
//     let arrLeng=arr.length;
    
// function arrSum(arrIn) {
//   let sum = 0
//   let i = 0
//   while ( i < arrLeng) {

//        sum = arrIn[i] + arrIn[i+1];
//       i = i + 2;
//       return sum;

// };
// };
// sum = arrSum(arr);
// console.log(sum);


// let arr=[1,6,23,8,4,8,3,7];
//     let arrLeng=arr.length;
    
// function arrSum(arrIn) {
//    let i = 0;
//    let j = 0;
//     let sum =[];
//     while(i < arrLeng) {
     
//       sum[j] = arrIn[i] + arrIn[i+1];
//       i = i + 2;
      
//       j++;
      
      
//     };
//     return sum;
// };

//  console.log(arrSum(arr));



//  6)	For time of this example remove last element from the given array. Create a function that based on given array return new array in pattern [a,b,c,d,e] -> [a+b, c+d, e+e]



// let arr=[1,6,23,8,4,8,3];
//     let arrLeng=arr.length;
    
// function arrSum(arrIn) {
//    let i = 0;
//    let j = 0;
//     let sum =[];
//     while(i < arrLeng -1) {
     
//       sum[j] = arrIn[i] + arrIn[i+1];
//       i = i + 2;
      
//       j++;
      
      
//     };
//     sum[sum.length]=arrIn[arrIn.length-1] + arrIn[arrIn.length-1];
//     return sum;
// };

//  console.log(arrSum(arr));




// 7)	Create a function the return one random element from given array. // use random function 



// let arr=[1,6,23,8,4,8,3,7];
//     let arrLeng=arr.length;
   
//     function returnRandom(arrIn) {
//       let x = arrIn[Math.floor(Math.random()*arrIn.length)];
//  return x;
//     };
// console.log(returnRandom(arr));








// 9)	Create a function that takes given array. Then takes a random element, 
// removes it from the array and pushes it to result arrays. 
// This takes place as long as there are elements in source array. 



// let arr=[1,6,23,8,4,8,3,7];
//     let arrLeng=arr.length;
    
//     function takesArr(arrIn) {
//         let resultArr = [];
//         let i = 0 
//         let randIn = arrIn.splice(Math.floor(Math.random()*arrIn.length), 1);
//         console.log(randIn)
//        while( i <= arrIn.length){
//              resultArr.push(randIn);
//            i++;
//        };
//                 return resultArr;
//     };
//     console.log(takesArr(arr));




// 11)	Create a function that will return the current day name in Polish. 

// let today = new Date();
// function getD(dat) {
//     let someday = new Date();
//     let x = someday.getDay();
//     switch(x){
//         case 1:
//         x="Poniedzialek";
//         break;
//         case 2:
//             x="Wtorek";
//             break;
//         case 3:
//             x="Sroda"
//             break;
//         case 4:
//             x="Czwartek";
//             break;
//         case 5:
//             x="Piatek";
//             break;
//         case 6:
//             x="Sobota";
//             break;
//         case 7:
//             x="Niedziela";
//             break;

//     }
//     return x;
// };
    

// console.log(getD(today));



// 12)	Create a function that tells us how many days till Friday 

// let today = new Date();

// function count(days) {
//     let someday = new Date();
//     let x = someday.getDay();
// if ( x===5) {
//     x = "dziś jest piatek"
// } else {
//     if(x<5){
//         x= 5-x;
//         console.log("do piatku" ,x , "dni")
//     }
//     else {
//         x=5+(-x);
//         console.log("do piatku" ,x , "dni");
//     } if(x===6) {
//         x=x+1
//         console.log("do piatku", x , "dni");
//     } else {
//         if(x===7) {
//             console.log("do piatku zostalo 5 dni ")
//         };
//         };
    
//     };
    

// return x;

// };
// console.log(count(today));
    

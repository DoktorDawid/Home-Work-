




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



    let arr=[1,6,23,8,4,8,3,7];
    let arrLeng=arr.length;

    function rev(arrIn) {

            let arrbackwards = arrIn;
            let rev = [];
            for(let i = 0 ; i<arrLeng;i++){
              rev[arrLeng -i -1]=arrbackwards[i];
            }
            return rev;
    };
    
        let r = rev(arr);
        console.log(r);





    // 5)	Create a function that based on given array returns new array in pattern [a,b,c,d,e,f] -> [a+b, c+d, e+f]    [1,3,4,1,0,3] => [4,5,3] function(array)=>array

//     let arr=[1,6,23,8,4,8,3,7];
//     let arrLeng=arr.length;

// function arrSum(arrIn) {

//     for(i = 0; i < arrLeng; i++)
// if(i=arrIn[0])

// };
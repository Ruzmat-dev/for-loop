


// let n = 0;
// let sum = 0;

// while (n < 100) {
//     n++
//     if (n % 2 == 0) {
//         sum = sum + n
//         console.log(n);
//     }
// }

// console.log('yigindisi=  ' + sum);


// let a = +prompt('son kiritig') ;
// let toq = 0 ;
// let juft = 0 ;

// for (let i = 1; i <= a; i++) {
//     if (i % 2 == 0) {
//         juft++
//     } else {
//         toq++
//     }
// }

// console.log(juft + ' = juft son bor ');
// console.log(toq + ' = toq son bor ') ;



let num = +prompt('a son dan : ') ;
let b = +prompt('b son dan  gacha  : ') ;

// switch (a) {
//     case 1 : {console.log('1 ga teng'); break;}
//     case 2 : {console.log('2 ga teng'); break;}
//     case 3 : {console.log('3 ga teng'); break;}
//     default  : {console.log('bunaka son yoq');}
// }


while ( num < b ) {
    num ++
    switch (num) {
    case 1 : {console.log('1 ga teng'); break;}
    case 2 : {console.log('2 ga teng'); break;}
    case 3 : {console.log('3 ga teng'); break;}
    default  : {console.log(num);} 
}
}
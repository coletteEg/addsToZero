// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:




for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
        if ((array[i] + array[j]) === 0) {
            console.log("true")
        } else {
            console.log("false")
        }
    }
}



// for(i = 0; i < array.length; i++){
//     if(i + array === 0){
//         console.log("true")
//     } else{
//         console.log("false")
//     }
// }


// let equalsZero = false

// for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//         if (array[i] + array[j] === 0) {
//             equalsZero = true 
//         }
//     }
    
// }

// console.log(equalsZero)


const num1 = process.argv[2];
const num2 = process.argv[3];

number_reverse =(n)=>{
    const arr =[];
    let numSplt = n.split("");
    for(i=0; i<numSplt.length; i++){
        arr.unshift(numSplt[i]);
    }
    return arr.join("");
}

console.log(Number(number_reverse(num1))+Number(number_reverse(num2)));

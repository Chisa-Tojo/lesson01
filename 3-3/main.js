const tri = Number(process.argv[2]);
const mark ="*";
const brank =" ";

for(let i=1; i<=tri; i++){
    let con=[];
    for(let j=0; j<=tri-i; j++){
        con.push(brank);
    }
    for(let k=0; k<=i*2-2; k++){
        con.push(mark);
    }
    console.log(con.join(""));
}

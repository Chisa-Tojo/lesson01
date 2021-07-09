const row = Number(process.argv[2]);
const col = Number(process.argv[3]);

for(let i=1; i<=row; i++){
    let con="";
    if(i%2===1){
        for(let j=1;j<=col;j++){
            if(j%2===1){
                con+="*";
            }else{
                con+="-";
            }
        }
    }else{
        for(let j=1;j<=col;j++){
            if(j%2===1){
                con+="-";
            }else{
                con+="*";
            }
        }
    }
    console.log(con);
}

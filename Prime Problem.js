let number=5;
let factor=0;
let count=0;
for(let i=0;i<number;i++){
    if(number%i==0){
        count++
    }
}
if(factor==2){
    console.log(number,"is a prime number")
}else{
    console.log(number,"is not a prime number")
}
{
    let num=5
    boolean = true;
        for (let i = 2 ;i< num ;i++){
            if (num % i == 0){
                boolean = false;
                break;}
        }
        if ( boolean == true){
            console.log("Yes");
        }
        else {
            console.log("No");
        }
}
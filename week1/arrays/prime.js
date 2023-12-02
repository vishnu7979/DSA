function isPrime(n){
    if(n<2)
    {
        console.log("Not Prime!!!");
        return false
    }
    for(let i=2;i<n/2;i++){
        if(n%i==0){
            console.log("Not Prime!!!");
            return false
        }

    }
    console.log('1')
    return true
    console.log('2')

}
console.log(isPrime(7));

//O()
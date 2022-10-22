function sumElement(arr,n){
    sum=0
    for(ele of arr){
        sum+=ele;
    }
    return sum
}

console.log(sumElement([1,2,3,4,5,6,7],7))
console.log(sumElement([1,2,3],3))
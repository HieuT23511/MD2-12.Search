function binarySearch (arrayNumbers:number[],inputNumber: number){
    let low:number =0;
    let high: number = arrayNumbers.length -1;
    let result: number = -1;
    while (low <= high){
        let mid = Math.floor((low + high)/2);
        if(arrayNumbers[mid] == inputNumber){
          return  mid;
        } else if(inputNumber < arrayNumbers[mid]){
            high = mid -1;
        } else {
            low = mid +1
        }
    }
    return result;
}
let array = [2, 5, 5, 5, 6, 6, 8, 9, 9, 9];
let inputNumber = 5;
let index = binarySearch(array,inputNumber);
if(index != -1){
    console.log(`${inputNumber} is index ${index} in [${array}]`);
} else {
    console.log(`${inputNumber} is not in Array`);
}

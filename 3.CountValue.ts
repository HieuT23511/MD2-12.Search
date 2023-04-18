function countValueInArray(numbers: number[], value: number) {
    let count: number = 0;
    numbers.forEach(elements=>{
        if(elements ===value){
            count++;
        }
    })
    return `Elements ${value} in array [${numbers}] appears ${count} times.`;
}
let inputArray = [1,2,6,4,5,4,3,4,2];
let valueNeedCheck = inputArray[3];
console.log(countValueInArray(inputArray,valueNeedCheck))
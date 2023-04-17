function printListOfMissingElements(array:number[]):number[]{
    let listOfMissingElement :number [] =[];
    for (let i:number = 0; i < 10; i++) {
        if(array.indexOf(i)===-1){
            listOfMissingElement.push(i)
        }
    }
    return listOfMissingElement;
}
let array:number[] = [1,2,5,6,7,10];
console.log(printListOfMissingElements(array));
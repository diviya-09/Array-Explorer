let numbers = [];
function getArray(){
    const input = document.getElementById("array").value;
    const numbers=input.split(",").reduce((acc,num) => {
        const parsedNum=parseFloat(num.trim());
        if(!isNaN(parsedNum)){
            acc.push(parsedNum);
        }
        return acc;
    } ,[]);
    return numbers;
}

function diplayArray(text){
    document.getElementById("result").innerText=text;
}

function sort(){
    const numbers=getArray();
    const sortedNumbers=numbers.sort((a,b) => a-b);
    document.getElementById("result").innerText = "Sorted: "+ sortedNumbers.join(",");
}

function reverse(){
    const numbers=getArray();
    const reversedNumbers=numbers.reverse();
    document.getElementById("result").innerText = "Reverse: "+ reversedNumbers.join(",");
}

function findeven() {
    const numbers=getArray();
    const findeven=numbers.filter((num) => num % 2 == 0);
    document.getElementById("result").innerText = "Even Numbers: "+ findeven.join(",");
}

function findOdd() {
    const numbers=getArray();
    const findOdd=numbers.filter((num) => num % 2 != 0);
    document.getElementById("result").innerText = "Odd Numbers: "+ findOdd.join(",");
}

function findmax() {
    const numbers=getArray();
    const findmax=Math.max(...numbers);
    document.getElementById("result").innerText = "Max Number: "+ (isFinite(findmax) ? findmax : "No valid numbers");
}





const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

function rearrangeArray(numbers) {
    const removedEle = numbers.splice(0, 3);
    numbers.push(...removedEle);
    return numbers;
}

console.log(rearrangeArray(numbers));


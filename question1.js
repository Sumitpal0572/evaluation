



const animals = ["Dog", "Cat", "Elephant", "Giraffe", "Lion", "Tiger", "Zebra", "Kangaroo", "Panda", "Monkey"];

function extractSubarray (array){

    return array.slice(3,7);
}

const newAnimals= extractSubarray(animals);

console.log(newAnimals);
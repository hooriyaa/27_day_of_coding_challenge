// QUESTION 79:
let carProperty={
    make:"Audi",
    model: "Etron GT",
    year: 2023
}
console.log(carProperty.model)




// QUESTION 80:
let updateCarProperty={
    make:"Audi",
    model: "Etron GT",
    year: 2023,
    color:"blue"
};
updateCarProperty.color="black"
updateCarProperty.year=2021;

console.log(updateCarProperty);



// QUESTION 81:
function logObjectProperties(obj:{[key:string]:any}){
   for (let property in obj){
    console.log(`${property}: ${obj[property]}`)
   }
}
logObjectProperties({  make:"Audi",
    model: "Etron GT",
    year: 2023,})


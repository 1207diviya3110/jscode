const myArr1 = [
  {
    id: 11,
    name : 'Harry',
    age: 23,
  },
  {
    id: 12,
    name: 'Hermione',
    age: 25
  },
  {
    id: 13,
    name: 'Ron',
    age: 24,
  }
];

for(let i =0 ; i < myArr1.length; i++){
  console.log(myArr1[i]);
}

console.log("----------------------");

myArr.forEach((emp, index, myArr1) => {
  console.log(myArr1);
  console.log(`${index} - ${JSON.stringify(emp)}`);

})
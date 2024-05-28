let myArr2 = [
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

let empAgeGt24 = myArr2.filter((emp) => {
  return emp.age > 24;
})

console.log(empAgeGt24);
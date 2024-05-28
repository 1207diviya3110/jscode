// print 0 to 4

console.log("0");
console.log("1");
console.log("2");
console.log("3");
console.log("4");

//loops help us do the same thing again and again

for(let i =0 ; i< 5; i++){
  console.log(i);
}


//iteration over array
let names =["Divya","Nitya","Deepu"];
for(let i =0; i<names.length; i++){
  console.log(names[i]);
}

//iteration over array using forEach loop

console.log("-------------- forEach loop -----------");

names.forEach(name => console.log(name));

console.log("------------ for of loop ------------------");
for(namee of names){
  console.log(namee);
}


//iteration over objects

let student = {
  name : "Peter",
  rollNo: 123,
  age: 24,
  dept: "Phy"
};


console.log("-------------- iteration over object using for in loop ----------------------");
for(key in student){
  console.log("Key is "+key+" and value is "+ student[key]);
}

//while loop
//steps in white loop
/*
1. Initialization
2. Condition checking
3. Body Execution
4. Updation

*/

console.log("----------------- iteration using while loop -------------");
let c = 0;
while(c < 5){
  console.log(c);
  c++;
}

console.log("---------------- do while loop --------------");
let i=0;
do{
  console.log(i);
}while(i < 5);
 
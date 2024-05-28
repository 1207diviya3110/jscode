let names1 = ["Alex","Hayley","Luke"];

const findName = (name) => {
  if(names1.includes(name)){
    console.log("The employee exists");
  } else {
    console.log("The employee does not exists");
  }
}

findName("Luke")
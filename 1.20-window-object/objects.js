console.log(window)

function getPageUrl(){
  let url = window.location.href;
  console.log(url);
  window.history.forward();
}

getPageUrl();

function add(){
  let result = 6+31;
  let emp = JSON.stringify({
    "id": 111,
    "age" : 23,
  });
  window.localStorage.setItem('result',result);
  window.localStorage.setItem('name','Nitya');
  localStorage.setItem("empOne",emp);
  console.log(result);
}

function getStorageData(){
  let name = localStorage.getItem("name");
  let result = localStorage.getItem("result");
  let e = localStorage.getItem("empOne");

  console.log(typeof name + " name is "+ name);
  console.log(typeof result + " result is "+ result);
  console.log(typeof e + " emp one data is "+e);

  console.log(name);
  console.log(parseInt(result));
  let empObj = JSON.parse(e);
  console.log(typeof e);
  console.log(empObj);

  const {id, age} = empObj;
  console.log(id);
  console.log(age);
}

function clearData(){
  localStorage.clear();
}
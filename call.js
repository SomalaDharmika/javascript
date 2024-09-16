console.log("hello");
setTimeout(() => {
  console.log("welcome");
}, 1000);
console.log("sona"); //first executes hello,then sona, then after 1 sec welcome is executed this is example of asynchronous and it is callback

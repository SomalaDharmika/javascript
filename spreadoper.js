set1 = [1, 2, 3, 4, 5];
set2 = [...set1, 6, 7, 8, 9, 10]; //set1 is expanding in set2
console.log(set2);

//spread operator using object

a = {
  name: "javascript",
  email: "javascript@gmail.com",
};

b = {
  ...a,
  course: "js",
};
console.log(b);

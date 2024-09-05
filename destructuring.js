//unpacking the values and assign to other variable
a = [100, 200];
[x, y] = a;
console.log(x, y);

c = [100, 200, 300];
[p, , r] = c; // 2nd variable is not declared so 200 is not assigned.
console.log(p, r); //if we print q also it shows not assigned
//destructuring object
s = {
  email: "abc@gail.com",
  age: 20,
};
const { email, age } = s; //unpacking
console.log(email);
console.log(s.age); //if it is not destructed prints like this

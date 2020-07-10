let x = Number(prompt("nhap vao x: "));
const pi = 3.14;
let kqa=4*(x*x+10*x*Math.sqrt(x)+3*x+1);
let kqb=(Math.sin(pi*x*x)+Math.sqrt(x*x+1))/(Math.exp(2*x)+Math.cos(pi/4*x));
console.log("ket qua bieu thuc a la: ",kqa);
console.log("ket qua bieu thuc b la: ",kqb);
let x = Number(prompt("nhap vao so tien x(boi so cua 10.000) : "));
let to100, to50, to20,to10;
to100= x / 100000; // so to 100k
let du1 = x%100000
to50 = du1 / 50000;// so to 50k
let du2 = du1%50000;
to20 = du2 / 20000;// so to 20k
let du3 = du2%20000;
to10 = du3 /10000; // so to 10k
console.log("ta doi",x,"thanh ",parseInt(to100),"to 100k",parseInt(to50),"to 50k",parseInt(to20),"to 20k",parseInt(to10),"to 10k")





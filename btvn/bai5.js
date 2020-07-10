let x = Number(prompt("nhap so co 3 chu so: "));
let tram, chuc , dv;
tram = x/100; // thu duoc so hang tram
let dutram = x%100; // phan con du
chuc = dutram / 10; // thu dc so hang chuc
let duchuc = dutram %10;
dv = duchuc /1; // so hang dv
console.log("tong 3 chu so la: ",parseInt(tram)+parseInt(chuc)+parseInt(dv));


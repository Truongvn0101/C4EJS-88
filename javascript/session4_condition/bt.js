let cao = Number(prompt(" nhap chieu cao(cm)"));
let nang = Number(prompt("nhap can nang(kg)"))
// bmi < 18.5 thieu can
// 18.5 - 24.9 binh thuong
// 24.9 - 29.0 thua can
// > = 30 beo phi
// bmi = (can nang)/(cao*cao)
let bmi = nang/(cao**2 / 10000);
console.log(bmi)
if( bmi < 18.5)
{
    console.log(" thieu can");
}
else if( bmi <= 24.9)
{
    console.log(" binh thuong");
}
else if ( bmi <=29.9)
{
    console.log("thua can");
}
else
{
    console.log("beo phi ");
}

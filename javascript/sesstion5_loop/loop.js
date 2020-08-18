
// let m = parseInt(prompt("nhap m"));
// let n = parseInt(prompt("nhap n"));
// for(let i = 0; i<=m; i++)
// {
//     if(m%i===0)
//     {
//         console.log(i);
//     }
// bt so nguyen to
/*
let a = parseInt(prompt("nhap a:"))
let count = 0;
for (let i= 1 ; i<= a; i++)
{
    if(a % i === 0)
    {
        console.log(i);
        count++;
    }
}
console.log("co",count,"uoc");
if(count===2)
{
    console.log("day la so nguyen to");
}
else
{
    console.log("khong phai so nguyen to");
}
*/
//tinh tong tu 1 - 100
// let s =0;
// for (let i = 1; i<=100 ; i++)
// {
//     s+=i;
// }
// console.log(s);

// let s =0
// for (let i = 0; i < 100 ; i++) 
// {    
//     if(i%2 ===1)
//     {
//         s+=i
        
//     }
// }
// console.log(s);
// let n = Number(prompt("nhap n"))
// let s =0;
// for (let i = 2; i < n ; i++) 
// {    
//     s+= (i-1)*i
// }
// console.log(s);


// tinh giai thua
// let p = 1
// let s = 0
// let n = Number(prompt("nhap n"))
// for (let i = 1; i <= n; i++)
// {   // giai thua
//     for (let j = 1; j <= i; j++) 
//     {
//             p*= j;           
//     }
//     // tong cac giai thua
//     s+= p;  // s += i!  
// }


//////////////////////////////////////
// vong while
// let n =Number(prompt("nhap 1 so lon hon 8"));
// while(n<= 8)
// {
//     n =Number(prompt("nhap lai so lon hon 8"))
// }
//  nhap 1 chuoi nhieu hon 8 ky tu
// let n= prompt("nhap chuoi lon hon 8 ki tu")
// while(n.length <= 8)
// {
//     n= prompt("nhap lai chuoi lon hon 8 ki tu")
// }
// // console.log(n);

/////////////////// nhap vao 2 so, so dau tien la so duong, so thu 2 la so am,
//sai nhap lai ca 2
// let a = Number(prompt("nhap so thu nhat"));
// let b = Number(prompt("nhap so thu hai"));
// while(a<=0 || b>=0)
// {
//     a = prompt("nhap lai a");
//     b = prompt("nhap lai b")
// }
// console.log(a);
// console.log(b);


//// nhap mk dai hon 8 ki tu va chua ki tu @

// let pass = prompt("nhap mat khau dai hon 8 ki tu")
// while(pass.length >8 && pass.indexOf('@') >=0 )
// // pass.length <=0 || pass.indexof('@'==-1)
// // dung pass.inucldes('@')
// // hoac dung pass.test(str);

// {
//     pass = prompt("nhap lai mat khau >8 ki tu va chua @")
// }
// console.log(pass);

// cho nguoi` dung nhap user va pass, neu user la admin va pass la 123456 thi` alert la chao mung admin
// sai: bao tk hoac mk sai cho nhap lai
// let user = prompt("nhap tai khoan");
// let pass = prompt("nhap mat khau");
// while(!(user == 'admin' && pass =='123456'))
// {
//     alert("tai khoan hoac mat khau sai, nhap lai");
//     user = prompt("nhap lai tai khoan");
//     pass = prompt("nhap lai mat khau");
// }
// alert("chao mung admin")    


////////////////
let n =Number(prompt("nhap 1 so lon hon 8"));
while(true)
{
    n =Number(prompt("nhap lai so lon hon 8"))
    if(n > 8)
    {
        break;
    }
}
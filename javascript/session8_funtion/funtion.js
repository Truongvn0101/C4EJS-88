// function hello(){
//     console.log("goeo cam tu c4ejs88");
// };
// hello();
// function welcome(s) {
//     console.log(s);
// }
// let xinChao =" welcome"
// welcome(xinChao);
// function tinhTong(a,b)
// {
//     let c = a +b;
//     console.log(c);
// }
// function tinhHieu(a,b) {
//     let c = a - b;
// }
// function tinhTich(a,b) {
//     let c = a * b;
// }
// function tinhThuong(a,b) {
//     let c = a / b;
// }
// function ptBacnhat(a,b){
//     console.log("xet phuong trinh ax+b=0 ");
//     if(a===0 && b===0){
//         console.log("pt vo so nghiem");
//     }
//     if(a===0 && (b!==0))
//     {
//         console.log("pt vo nghiem");
//     }
//     if(a!==0)
//     {
//         x= -b/a
//         console.log("phuong trinh co nghiem duy nhat la");
//     }
// }
// let a = 1;
// let b = 0;
// ptBacnhat(a,b)
//-==============================================
// function tinhTong2(a,b)
// {
//     let c=a+b;
//     return c;
// }
// let sum = tinhTong2(10,20);
// console.log(sum);
// console.log(`Trung binh cong la: ${sum/2}`);


// nhan vao 1 so n, tra ve tong tu 1-> n

// in ra ket qua (ngoai function)
// function tinhTong3(n)
// {
//     let sum =0
//     for( let i =1; i<n; i++){
//         sum +=i;
//     }
//     return sum;
// }
// let s = tinhTong3(100);
// console.log(s);
// console.log(tinhTong3(100));

// function giaiThua(n)
// {
//     let p = 1;
//     for(let i=1;i<=n;i++)
//         {
//             p*=i;
//         }
//     return p;
// }
// let p = giaiThua(5);
// console.log(p);


// function tongCuaMang(arr)
// {
//     let s = 0;
//     for(let i=0; i< arr.length;i++)
//         {
//             s+= arr[i]
//         }
//     return s;
// }

// function spliceMang(arr,n)
// {
//     let newArr =[];
//     for(let i=0;i< arr.length; i++)
//         {
//             if(arr[i]<n)
//             {
//                 newArr.push(arr[i]);
//             }
//         }
//     return newArr;            
// }

// function gt(n)
// {
//     if(n===1)
//         {
//             return 1;
//         }
//     return n* gt(n-1);
// }
// console.log(gt(10));


// // Array Interation

// let arr = [1,20,6,12,7,10,9,5];
// let index = arr.findIndex(function (v){  // tim` vi tri cua phan tu trong mang
//     return v === 10 ;
// });
// console.log(index);

// arr.findIndex(function(v,i,a){

// });
// arr.findIndex(function(v,i,a){
//     return i>5;
// })

// function giaTriBang6(v,i,a)
// {
//     return v ===6;
// }

// arr.findIndex(giaTriBang6);

//  Tim gia tri = 20;
// console.log(arr.find(giaTriLonHon20));
// function giaTriLonHon20(v){
//     return v > 20;
// }



///////////////////////////////////

// let phones =['iPhone X','Galaxy Note 10','Xperia 2'];
// ( khong phan biet hoa thuong
//1. Tim ten 1 dt co chua chu 'a'
//2. Tim ten cac dt co chua chu 'g'
//3.Tim cac dt co ten dai hon 8 ki tu
//4.tim ten 1 dt co ten bat dau boi 'x'

let phones = [
    {
        'name': 'iPhone X',
        'price': 20e6 ,
        'brand': 'Apple',
    },
    {
        'name': 'Galaxy',
        'price': 22e6,
        'brand': 'Samsung',
    },
    {
        'name': 'Xperia 2',
        'price': 15e6,
        'brand':'Sony'
    },
];
// 1. Tim dt co gia lon hon 18tr
// 2. tim dt co ten chua chu 'iphone'
// 3. tim dt co gia trong khoang 10-20tr
// 4. co dt nao < 18tr khoang
// 5. Tim dt cua hang Apple 
// 6. Tim dt co gia tri cao nhat nho nhat
// 7. tinh tong gia tri cua tat ca cac dt
// 8. co bao nhieu dt cua hang Sony 
// 9. sap xep dt theo ten a-z
// 10.sap xep dt theo gia tu cao -> thap

let result = phones.filter(function(phone,index){
    return phone.price > 18e6;
});
// print(result);

function print(phones){
    for(let i=0; i>phones.length; i++)
        {
            const phone = phones[i];
            console.log(`${i+1}`);
            for (const key in phone) {
                const value = phone[key];
                console.log(`${key}: ${value}`);
            }
        }
}

// Sort by name 
//
phones.sort(function(p1,p2){
    return p1.name.localeCompare(p2.name);
});
print(phones);

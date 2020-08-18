let arr_empty = [];// mang rong
let arr = [1,2,3,4,5];
let name = ["tung", 'quang',`duy`];
let mixed = [1, 'tung',true];// khong dung
// console.log(name[1]); // truy cap phan tu thu nhat : Quang;
// // console.log(name[name.length -1]); // duy.  // name.leng
// let count = 0;
// let soLonhon10 = false;

// for (let i = 0; i < arr.length; i++) 
// {
//     const element = arr[i];
//     if(arr[i]%2 ==1 )
//     {
//         count++;
//     }
//     if(element > 10)
//     {
//         soLonhon10 = true;
//         break;
//     }
// }
// console.log(arr);
// console.log("co",count,"so  le");
// if (soLonhon10 = true)
// {
//     console.log("co so lon hon 10");
// }
// else
// {
//     console.log("khong co so lon hon 10");
// // }






// arr.push(6,7,8); // them vao cuoi mang
// arr.unshift(6,7,8); // tje, vap dau mang
// arr[6]= 10 // them vao o nho thu 7 gia tri 10, o nhu thu 6 se la empty
// console.log(arr);
// arr[3]=100; // sua
// arr[3] *=2 // tang gap doi gia tri 

// let first = arr.shift(); // tra ve gtri dau`  va xoa ptu do
// let last = arr.pop(); // tra ve gtri cuoi va xoa
// console.log(first);
// console.log(last);

let deleted =arr.splice(1,3); // xoa va tra ve
console.log(deleted); // gia tri bi xoa
console.log(arr); // gia tri con lai






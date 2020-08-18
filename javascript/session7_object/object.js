// let object_empty = {};
// let myInfo = {
//     'name' : 'Truong',
//     age: 20,
//     "school": 'DHTL',
//     favorite: ["watching, reading"],
//     'class':{
//         'name':'c4ejs88'
//     }
// };
// // // them moi
// myInfo['country'] = 'VN';
// myInfo.birthDay = 2000;
// // console.log(myInfo);
// // // Update
// myInfo['age']=20;
// myInfo.class = 'DHQG';
// // console.log(myInfo);
// // //Delete
// delete myInfo['class'];
// delete myInfo.favorite;
// console.log(myInfo);


// //for
// for (const key in obj) {
//     // if (object.hasOwnProperty(key)) {
//         const value =obj[key];
//         console.log(key);
//         console.log(value);
//     }

let obj = {};
obj.ten = prompt("nhap ten :");
obj.tuoi = Number(prompt("nhap tuoi:"));
obj.truong = prompt("nhap truong");

// truy van toan bo key trong 1 obj
for (const key in obj) {   
    // const value = obj[key];
    console.log(key,":", obj[key]); //hoac  `${key}:${value}`
}
// let editKey = prompt("nhap thong tin muon sua: ")
// if (obj.hasOwnProperty(editKey))
// {
//     obj[editKey]= prompt("nhap gia tri moi:");
//     console.log("==============cap nhat thanh cong=====");
//     for (const key in obj) {
//             const value = obj[key];
//             console.log(`${key}:${value}`);
//     }
// }
// else
// {
//     alert("nhap sai")
// }

// // nhap value ==> xoa key
let valueDelete = prompt("nhap gtri muon xoa");
for (const key in obj) {
    const value = obj[key];
    if(value === valueDelete)
        delete obj[key];
}
for (const key in obj) {
    console.log(`${key}:${obj[key]}`);
}

        
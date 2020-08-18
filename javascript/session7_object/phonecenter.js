//1. tao mang chua 3 dien thoai, trog do moi dt la 1 object chua 3 thong tin, ten , gia ,hang

let phones = [
    {
        'name' :'Iphone X',
        'price' : 20e6,
        'brand' : 'Apple'
    },
    {
        'name' :'Galaxy Note 10',
        'price' : 22e6,
        'brand' : 'Samsung'
    },
    {
        'name' :'Nokia Note 10',
        'price' : 11e6,
        'brand' : 'Nokia'
    },
]

//2. In thong tin theo cau truc : 1: ten:... Gia:.... Hang:... 2. Ten..
for (let i = 0 ; i < phones.length ; i++)
{
    const phone = phones[i];
    console.log(`${i+1}:`);
    for (const key in phone) {
        const value = phone[key];
        console.log(`${key}:${value}`);
    }
}

//3. cho nguoi dung nhap them 1 dt moi gom ten, gia hang
let newName = prompt("nhap ten:");
let newPrice = Number(prompt("nhap gia"));
let newBrand = prompt("nhap hang")
let newPhone = {

    'name' : newName,
    'price' : newPrice,
    'brand' : newBrand,
};
phones.push(newPhone);
//4. In ra cac dt co gia tu 10-20 trieu.
console.log("dt co gia tu 10-20");
for (let i=0; i<phones.length;i++)
{
    const phone = phones[i];
    if(phone.price>=10e6 && phone.price<=20e6)
    {
        console.log(`${i+1}`);
        for (const key in phone) {
            const value = phone[key];
            console.log(`${key}:${value}`)
        }
    }
};
//5. In ra cac dt co chua ' iphone ' khong phan biet thuong va hoa // toLowerCase => khong phan biet hoa thuong
let search = 'iphone'
for (let i = 0; i < phones.length; i++) {
    const phone = phones[i];
    if(phone.name.toLowerCase().includes(search.toLowerCase))
    {
        console.log(phone);
    }          
}


//6

//7. cho ng dung nhap 1 so thu tu
// c?ho sua thong tin dt do
let stt = Number(prompt("nhap vi tri muon sua"));
stt= stt-1;
if(stt >=0 && stt <phones.length)
{
    phones[stt].name = prompt("nhap ten moi");
    phones[stt].price = prompt("nhap gia moi");
    phones[stt].brand = prompt("nhap hang moi");
}
else{

    console.log("nhap sai");
}

//8. tim dt co gia cao nhat
let max = phones[0] ;
for (let i =0; i<phones.length;i++){
    const phone = phones[i];
    if(max.price <phone.price)
    {
        max = phone;
    }
}
console.log(`Dt gia lon nhat la:`);
for (const key in max) {
    const value = max[key];
    console.log(`${key}:${value}`);
}


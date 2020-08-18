//  DOM 
// console.dir(document);
// console.dir(document.getElementById("welcome"));  //goi id

// console.dir(document.getElementById("welcome").innerHTML); // lay thong tin inner html

// let h1Welcome = document.getElementById("welcome"); //B1: goiH1
// console.log(h1Welcome.innerHTML); // lấy dữ liệu HTML

// h1Welcome.innerHTML = " Xin chao C4EJS 88" // đẩy dữ liệu vào html chuyển từ welcome -> xin chào. sua thong tin cua html
// let h2Time = document.getElementById("time"); 

// var d = new Date();      // code chay thoi gian thuc.
// h2Time.innerHTML = d;    // chuyển thời gian tĩnh của html thanh thời gian động.

// let h1Welcome = document.getElementById("welcome");
// console.log(h1Welcome.innerHTML);
// h1Welcome.innerHTML = " Xin chao C4EJS 88" // sua thong tin cua HTML thay the bang thong tin cua jS
// // let name = prompt("nhap ten");
// // h1Welcome.innerHTML = "xin chao "+name;
// let listPContent = document.getElementsByClassName("content")
// for (let i=0;i<listPContent.length;i++){
//     let pContent = listPContent[i];
//     pContent.innerHTML ="Hello from classname"
// }
// // khong the dung innerHTML vi classname la 1 mang, vi vay phai dung vong for de duyet het cac phan tu, sau do moi co the dung innerHTML



// let listMenu =[
//     // "<h1>pho thin</h1>",
//     "Pho Thin",
//     "Bun Ca",
//     "Com Rang",
//     "Bun Dau",
//     "Bun Dau 2",
//     "Bun Dau 3",
// ];

// let listPContent = document.getElementsByClassName("content")
// for (let i=0;i<listPContent.length;i++){
//     let pContent = listPContent[i];
//     pContent.innerHTML = listMenu[i]; // chuyen tu 4 pho thin sang list do an   
// }
// let domMenu = document.getElementById("food-menu")

// for (let i =0; i<listMenu.length;i++){
//     const food = listMenu[i]; 
//     domMenu.innerHTML +=`<li>${food}</li>`; // neu dung phep gan(=) thi gia tri sau sẽ đè vào giá trị trước, vậy nên phải dùng (+=) để thêm từng giá trị vào mảng
// }

// them mon moi
// let newFood = prompt("nhap mon moi");
// listMenu.push(newFood);
// domMenu.innerHTML= ''; // xóa dữ liệu cũ
// for (let i =0; i<listMenu.length;i++){
//     const food = listMenu[i];
//     domMenu.innerHTML +=`<li>${food}</li>`;
// }
// displayMenu(listMenu)

// ham` hien thi menu
// neu con nhieu list menu khac nếu để không là displayMenu() thì sẽ chỉ hiển thị listMenu, để tránh trường hợp này nên truyền vào (menus)
// function displayMenu(menus){
//     let domMenu = document.getElementById("food-menu") // khai bao
//     domMenu.innerHTML =''; // xoa du lieu cu
//     for (let i =0; i<listMenu.length;i++){
//         const food = listMenu[i];
//         domMenu.innerHTML +=`<li>${food}</li>`; // in 
//     }
// }
// ----------------------------------------------------------------------


function onClickWelcome(){
    alert("ban vua click vao welcome")
}
function onClickButton(){
    document.getElementById('welcome').innerHTML ="++++hello+++++"
    // click vao thi se sua xinchaoabcxyz ->> hello+++
}
function onDisplayname(){
    let name = document.getElementById("txt-name").value;// dung value
    // khong the dung innerhtml vi the Input phai dung value

    console.log(name);
}
function onDisplayFullName(){
    let fullname = document.getElementById("txt-name").value // lay thong tin input   
    document.getElementById("display-name").innerHTML = fullname; //in input ra man hinh
    
}
function nameAndAge(){
    let ten = document.getElementById("txt-name").value;
    let namsinh = document.getElementById("nam-sinh").value;
    document.getElementById("ten-vatuoi").innerHTML = `ten cua ban la ${ten}, tuoi cua ban la ${2020-namsinh}`
}
function onRemove(t,e){   // hoac onRemove(stt)
    // document.getElementsByClassName("btn-remove")[stt].remove();
    // console.dir(t)  // hien thong tin nhu 1 object cua t, t la 1 DOM
    t.remove(e);
    console.log(e); // hien toa do chuot, phim nao duoc bam
}
function onKeyPress(e){
    console.log(e); // hiển thị các nút đã được bấm trên console
    
    if(e.keyCode ==13){
        // e.key === 'enter'
        onPressLogin();
    }
}
function onPressLogin(e){
    if(document.getElementById("user-name").value = 'admin' && document.getElementById("pass-word").value ==='123456'){
        alert("dang nhap thanhc ong")
    }
    else{
        alert("tai khoan hoac mat khau sai, hay thu lai")
    }
}

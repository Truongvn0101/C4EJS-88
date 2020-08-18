let thang = parseInt(prompt(" nhap thang "));
switch (thang){
    case 1:       
    case 3:
    case 5:     
    case 7: 
    case 8:
    case 10:
    case 12:
        console.log("31 ngay");
        break;
    case 2:
        console.log(" 28 ngay");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log(" 30 ngay");
        break;
    default:
        console.log("nhap sai thang");
}
//1,3,5,7,8,10,12  31 ngay
// 2 - 28 ngay 
// 4/6/9/11
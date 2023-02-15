let stIp = "";
let arr = [];
const inputVal = () => {
    let input = document.getElementsByTagName("input")[0].value;
    console.log(input);
    arr = input.split('.');
    console.log(arr);
    let arr1 = [];
    for(let biNum of arr) {                     //validationg input
        if(biNum>255 || arr.length >4 || biNum ==""){
            return alert("put correct IP address");
        }else{
            arr1.push(toBi(parseInt(biNum)));
        }
    }
    console.log(arr1);
    stIp = arr1.toString();
    stIp = stIp.replace(",", "");
    stIp = stIp.replace(",", "");
    stIp = stIp.replace(",", "");
}
// document.getElementsByTagName("button")[0].addEventListener("click", inputVal);
document.getElementById("mTrigger").addEventListener("click",inputVal);
const toBi = (num) => {
    let bi = num.toString(2);
    console.log(bi);
    let zero = "";
    if(bi.length < 8) {
        for(let x = 0;x < 8-bi.length;x++){
            zero+="0";
        }
    }
    let n = zero + bi;
    // console.log(n);
    return n;
}
// toBi(128);

let snBi = "";
let hBits = 0;
const subnetMask = (e) => {
    let select = e.target.value;
    console.log(select);
    let one ="";
    let zr = "";
    let count = 0;
    for(let x = 0;x < select;x++) {
        one += "1";
    }
    for(let y = 0;y < 32-select;y++) {
        zr += "0";
        count++;
    }
    snBi = one + zr;
    console.log(snBi);
    hBits = 2**count-2;
    console.log(hBits);
    
}
document.getElementsByTagName("select")[0].addEventListener("change",subnetMask);

const calculator = () => {
    let string ="";
    console.log(stIp);
    console.log(snBi);
    if(stIp==[]){
        console.log("err");
    }else{
        for(let z = 0;z < 32;z++){
            if(stIp[z] == snBi[z] && stIp[z] == 1) {
                string += "1";
            }else {
                string += "0";
            }
            // console.log(z);
        }
        console.log(string);

        let arr2 = ["", "", "", ""];
        for(let num1 = 0; num1 < 4;num1++) {
            for(let num2 = 0; num2 < 8; num2++) {
                arr2[num1] += string[(num1*8) + num2];
            }
        }

        let deciNum = 0;
        let arr3 = [];
        for(let biNum of arr2) {
            deciNum=0;
            for(let idx = 0;idx < biNum.length;idx++){
                if(biNum[idx] == 1){
                    switch (idx) {
                        case 0:
                            deciNum += 128;
                            break;
                        case 1:
                            deciNum += 64;
                            break;
                        case 2:
                            deciNum += 32;
                            break;
                        case 3:
                            deciNum += 16;
                            break;
                        case 4:
                            deciNum += 8;
                            break;
                        case 5:
                            deciNum += 4;
                            break;
                        case 6:
                            deciNum += 2;
                            break;
                        case 7:
                            deciNum += 1;
                            break;
                    }
                }
            }
            arr3.push(deciNum);
            // return deciNum;
        }
        console.log(arr3);

        let fNum = parseInt(arr3[3]) + 1;
        let arr7 = [];
        arr7.push(arr3[0], arr3[1], arr3[2], fNum);
        console.log(arr7); 
        let fRange = "";
        for(let index3 in arr7) {
            if(index3 < 3) {
                fRange += arr7[index3] + ".";
            }else {
                fRange += arr7[index3];
            }
        }
        console.log(fRange);

        let netAdd = "";
        for(let index in arr3) {
            if(index < 3) {
                netAdd += arr3[index] + ".";
            }else {
                netAdd += arr3[index];
            }
        }
        console.log(netAdd);

        let class1 = "";
        if(1<= arr[0] && arr[0] <= 127){
            class1 = "A";
        }else if("128" <= arr[0] && arr[0] <= "191"){
            class1 = "B";
        }else if("192" <= arr[0] && arr[0] <= "223"){
            class1 = "C";
        }else if("224" <= arr[0] && arr[0] <= "239"){
            class1 = "D";
        }else{
            class1 = "E";
        }   
        arr=[];

        let opsnBi = "";
        for(let val of snBi) {
            if(val == "1"){
                opsnBi += "0";
            }else{
                opsnBi += "1";
            }
        }
        console.log(opsnBi);

        let broadIp = "";
        for(let a = 0;a < 32;a++){
            if(stIp[a] != snBi[a] && stIp[a] == 0) {
                broadIp += "0";
            }else {
                broadIp += "1";
            }
        }
        console.log(broadIp);

        let arr4 = ["", "", "", ""];
        for(let num3 = 0; num3 < 4;num3++) {
            for(let num4 = 0; num4 < 8; num4++) {
                arr4[num3] += broadIp[(num3*8) + num4];
            }
        }
        console.log(arr4);

        let deciNum1 = 0;
        let arr5 = [];
        for(let biNum1 of arr4) {
            deciNum1=0;
            for(let idx1 = 0;idx1 < biNum1.length;idx1++){
                if(biNum1[idx1] == 1){
                    switch (idx1) {
                        case 0:
                            deciNum1 += 128;
                            break;
                        case 1:
                            deciNum1 += 64;
                            break;
                        case 2:
                            deciNum1 += 32;
                            break;
                        case 3:
                            deciNum1 += 16;
                            break;
                        case 4:
                            deciNum1 += 8;
                            break;
                        case 5:
                            deciNum1 += 4;
                            break;
                        case 6:
                            deciNum1 += 2;
                            break;
                        case 7:
                            deciNum1 += 1;
                            break;
                    }
                }
            }
            arr5.push(deciNum1);
        }
        console.log(arr5);

        let lNum = parseInt(arr5[3]) - 1;
        let arr6 = [];
        arr6.push(arr5[0], arr5[1], arr5[2], lNum);
        console.log(arr6); 
        let lRange = "";
        for(let index2 in arr6) {
            if(index2 < 3) {
                lRange += arr6[index2] + ".";
            }else {
                lRange += arr6[index2];
            }
        }
        console.log(lRange);

        let broadAdd = "";
        for(let index1 in arr5) {
            if(index1 < 3) {
                broadAdd += arr5[index1] + ".";
            }else {
                broadAdd += arr5[index1];
            }
        }
        console.log(broadAdd);

        let tr = document.createElement("tr");
        const tablePop = (val) => {
            let td = document.createElement("td");
            td.innerText = val;
            tr.appendChild(td);
            let tbody = document.getElementById("su");
            tbody.appendChild(tr);
        }
        tablePop(class1);
        tablePop(netAdd);
        tablePop(fRange + '-' + lRange);
        tablePop(broadAdd);
        tablePop(hBits);
        // class1 = "";
        // netAdd="";
        // fRange="";
        // lRange="";
        // broadAdd="";
        // hBits = 0;
    }
}
// document.getElementsByTagName("button")[0].addEventListener("click", calculator);
document.getElementById("mTrigger").addEventListener("click",calculator);
const toDecinmal =(x)=>{
    let tmp = x.split("").reverse();
    let decimal = 0;
    for(let idx in tmp){
        if(tmp[idx] == 1){
            decimal += 2**idx;
        } 
    }
    return decimal;
}

const CalHost =()=>{
    let hostsNum = document.getElementsByTagName("input")[1].value;
    let hosts =[];
    if(hostsNum > 4294967294){
        alert("can't calculate");
    }else{
        for(let x=1; x<=32;x++){
            hosts.push(2**x-2);
        }
        console.log(hosts);
        let reqHostBit = null;
        for(let x in hosts){
            if(hosts[x]>= hostsNum){
                reqHostBit = parseInt(x)+1;
                break;
            }
        }
        let reqSNBits = 32-reqHostBit;
        let reqSNMask = "";
        for(let x=1;x<=reqSNBits; x++){
            reqSNMask += "1";
        }
        for(let x =1;x<=reqHostBit;x++){
            reqSNMask += "0";
        }
        let SnFirstOc = reqSNMask.slice(0,8);
        let SnSecondOc = reqSNMask.slice(8,16);
        let SnThirdOc = reqSNMask.slice(16,24);
        let SnFourthOc = reqSNMask.slice(24,32);
        let decSn1stOc = toDecinmal(SnFirstOc);
        let decSn2ndOc = toDecinmal(SnSecondOc);
        let decSn3rdOc = toDecinmal(SnThirdOc);
        let decSn4thOc = toDecinmal(SnFourthOc);
        let decSnMask = decSn1stOc+"."+decSn2ndOc+"."+decSn3rdOc+"."+decSn4thOc; 
        document.getElementsByTagName("h2")[0].innerText = decSnMask;
    }
}
document.getElementsByTagName("button")[1].addEventListener("click",CalHost);
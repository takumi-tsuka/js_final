function calculateIP() {
    let tbody = document.getElementsByTagName("tbody")[0];
    let tbody1 = document.getElementsByTagName("tbody")[1];
    while(tbody.firstChild){
        tbody.removeChild(tbody.firstChild);
    }
    while(tbody1.firstChild){
      tbody1.removeChild(tbody1.firstChild);
  }
    console.log(tbody.children);
    let ip = document.getElementsByTagName("input")[0].value;
    let parts = ip.split("."); //stores the individual octets of the IP in string
    console.log(parts);
    let binary = ""; // its going to store the whole address
    for (let i = 0; i < parts.length; i++) {
      let bin = parseInt(parts[i]).toString(2); // converts the 4 octets of the IP into binary
      while (bin.length < 8) {
        bin = "0" + bin;
      }
      binary += bin;
    }
    for(let val of parts) {
      if(val>255 || parts.length >4 || val ==""){
          return alert("Put correct IP address");
      }
  }
    // console.log(binary);
    // console.log("intpref"+intPref);

    let prefix =  intPref;//document.getElementsByTagName("select")[0].value;
    let prefixLength = parseInt(prefix);
    let network = binary.slice(0, prefixLength);
    let host = binary.slice(prefixLength);
    console.log(binary);
    console.log("network"+network);

    let = interestingOctet = getInterestingOctet(prefix); ////
    console.log("interestingoctet"+interestingOctet);

    let blockSize = calculateBlockSize(interestingOctet);
    console.log(blockSize);

    //let newIP ="";

    //console.log(newIP);  /////////////////
    let low = network + host.replace(/1/g, "0"); //replace all 1's in the host part for 0
    console.log(low);  //////////////////
    let lowIP = ""; 
    for (let i = 0; i < low.length; i += 8) {
      let part = low.slice(i, i + 8);
      console.log("part"+part);
      lowIP += parseInt(part, 2) + ".";
    }
    lowIP = lowIP.slice(0, -1);
    console.log(lowIP); //<-this is a new network address
    
    // let high = network + host.replace(/0/g, "1"); //inverse as the low 
    // let highIP = "";
    // for (let i = 0; i < high.length; i += 8) {
    //   let part = high.slice(i, i + 8);
    //   highIP += parseInt(part, 2) + ".";
    // }
    // highIP = highIP.slice(0, -1);
    // console.log(highIP); /////////////////
    
  ///*********************************************************
//   let sbnt=newIP.split(".");
let sbnt = lowIP.split(".");
  console.log(sbnt);
  let test =0; 
  if( prefix >= 1 && prefix<=8){
      test=1; //sbnt[0]
  } else if(prefix>=9 && prefix<=16){
      test=2 //sbnt[1]
  } else if( prefix>=17 && prefix<=24){
      test=3; //sbnt[2]
  } else{
      test=4  //sbnt[3]
  }
//   let interestingOctetIndex = test -1;
//   let interestingOctetValue = parseInt(sbnt[interestingOctetIndex]);


  for(let x=0; x< (256/blockSize); x++){
    let tr = document.createElement("tr");
    if(test==1){
        sbnt[0] = blockSize*x;
    }else{
        sbnt[test-1] = blockSize*x;
    };

    let stringSbnt = sbnt.join(".");
    console.log(stringSbnt);
    let td = document.createElement("td");
    td.innerText=stringSbnt;
    tr.appendChild(td);
    let tmpSbnt1 = [...sbnt]; 
    tmpSbnt1[3] =parseInt(tmpSbnt1[3])+1;
    td1 = document.createElement("td");
    let tmpSbnt2 =[...sbnt];
    if(test==1){
        tmpSbnt2[0] = blockSize*(x+1)-1;
    }else{
        tmpSbnt2[test-1] = blockSize*(x+1)-1;
    }
    for(let idx in tmpSbnt2){
        if(tmpSbnt2[idx] ==0){
            tmpSbnt2[idx] ="255";
        }
    }
    console.log("tmpsbnt2: "+tmpSbnt2);
    let tmpSbnt3 = [...tmpSbnt2];
    tmpSbnt3[3] = tmpSbnt3[3]-1;
    console.log(tmpSbnt3);
    td1.innerText=tmpSbnt1.join(".")+"-"+tmpSbnt3.join(".");
    tr.appendChild(td1);
    let td4 = document.createElement("td");
    td4.innerText=tmpSbnt2.join(".");
    tr.appendChild(td4);
      document.getElementById("pablo").appendChild(tr);
  }
    // return {
    //   newIP: newIP,
    //   range: lowIP + " to " + highIP
    // };
  };

  function getVal(e) {
    intPref = e.target.value;
  };

  document.getElementsByTagName("select")[0].addEventListener("change", getVal);
  document.getElementsByTagName("button")[0].addEventListener("click", calculateIP);

  function getInterestingOctet(prefix) {
    const prefixLength = parseInt(prefix);
    const binary = "1".padStart(prefixLength, "1") + "0".padStart(32 - prefixLength, "0");
    const octets = [];
    for (let i = 0; i < 4; i++) {
      octets.push(binary.slice(i * 8, (i + 1) * 8));
    };

    for (let i = 0; i < octets.length; i++) {
      const octet = parseInt(octets[i], 2);
      if (octet !== 255) {
        return octet;
      }
    }
    return parseInt(octets[octets.length - 1], 2);
  };

  function calculateBlockSize(interestingOctet) {
    return 256 - interestingOctet;
  };
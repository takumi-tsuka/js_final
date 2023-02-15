const keyHandler =(e)=>{
    let code = e.key.toLowerCase().charCodeAt();
    if(code<48 || code>57){
        if(code !==46){
            e.preventDefault();
        }
    }
}

// const inputValify =()=>{
//     let inputValue = document.getElementsByTagName("input")[0].value;
//     let inputArray = inputValue.split(".");
//     for(let val of inputArray){
//         if(val>255 || inputArray.length >4 || val ==""){
//             alert("put correct IP address");
//             break;
//         }
//     }
// }

document.getElementsByTagName("input")[0].addEventListener("keypress",keyHandler);
// document.getElementsByTagName("button")[0].addEventListener("click",inputValify);
// console.log("Hello");

document.getElementById('btn1').addEventListener('click',()=>{
    document.getElementById('div-container').style.backgroundColor="red";
})


document.getElementById('btn2').addEventListener('click',()=>{
    // document.getElementById('div-container').style.width = "130px";
    document.getElementById('div-container').style.width="140px";
    document.getElementById('container-2').style.width="100px";
    document.getElementById('container-2').style.height="150px";
    document.getElementById('container-2').style.border="white";

    // document.getElementById('div-container').style.backgroundColor="black";
})

document.getElementById('btn3').addEventListener('click',()=>{
    document.getElementById('div-container').style.width = "130px";
})
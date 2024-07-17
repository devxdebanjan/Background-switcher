const buttons=document.querySelectorAll(".rect");
const body=document.querySelector("body");

buttons.forEach((item)=>{
    item.addEventListener('click',function (event){
        body.style.backgroundColor=event.target.id;
    })
})
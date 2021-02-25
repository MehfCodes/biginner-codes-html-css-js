let container=document.querySelector("#container");
let layout=document.querySelector("#layout");
let info=document.getElementById("info");
const closeIcon=document.querySelector(".fa-close");
let btn=document.getElementsByClassName("btn")[0];
const showModal=()=>
{
    layout.style.display='block';
    info.style.top='47%';
}
const closeModal=()=>
{
    layout.style.display='none';
    info.style.top='-50%';
}
btn.onclick=()=>showModal();
closeIcon.onclick=()=>closeModal();

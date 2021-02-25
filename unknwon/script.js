'use stric'
let container=document.querySelector('#container');
let veg=document.querySelector('#veg');
let meat=document.querySelector('#meat');
let cheese=document.querySelector('#cheese');
let fille=document.querySelector('#fille');
let vegBtnPluse=document.querySelector('.veg-btn-plus');
let meatBtnPluse=document.querySelector('.meat-btn-plus');
let cheeseBtnPluse=document.querySelector('.cheese-btn-plus');
let filleBtnPluse=document.querySelector('.fille-btn-plus');
let vegBtnNegative=document.querySelector('.veg-btn-negative');
let meatBtnNegative=document.querySelector('.meat-btn-negative');
let cheeseBtnNegative=document.querySelector('.cheese-btn-negative');
let filleBtnNegative=document.querySelector('.fille-btn-negative');
const createElement=(txt,selector,node,before)=>
{
    let div=document.createElement('div');
    let texNode=document.createTextNode(txt);
    div.appendChild(texNode);
    div.setAttribute('class',selector);
    if(selector!='fille' && container.contains(node)){
        container.insertBefore(div,before);
    }
    
    else if(selector=='fille')
        container.appendChild(div);

    else if(!container.contains(node))
        container.appendChild(div);
}

const removeElement=(selector)=>
{
    if(document.querySelector(selector)!=undefined)
    container.removeChild(document.querySelector(selector));
}

vegBtnPluse.onclick=()=>createElement('veg','veg',veg,meat);
meatBtnPluse.onclick=()=>createElement('meat','meat',meat,cheese);
cheeseBtnPluse.onclick=()=>createElement('cheese','cheese',cheese,fille);
filleBtnPluse.onclick=()=>createElement('fille','fille',fille);
vegBtnNegative.onclick=()=>removeElement('.veg');
meatBtnNegative.onclick=()=>removeElement('.meat');
cheeseBtnNegative.onclick=()=>removeElement('.cheese');
filleBtnNegative.onclick=()=>removeElement('.fille');
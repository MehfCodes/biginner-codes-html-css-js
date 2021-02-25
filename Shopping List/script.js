function add(){
    var item=document.getElementById("itm").value;
    if(item==""){
        alert("please insert an item");
    }
    else
    document.getElementById("itm").value="";
    var outPut=document.getElementById("list");
    var p=document.createElement("p");
    var span=document.createElement("span");
    var text=document.createTextNode(item);
    span.appendChild(text);
    p.appendChild(span);
    outPut.appendChild(p);
    var spanDelete=document.createElement("span");
    var textDelete=document.createTextNode("Delete");
    spanDelete.appendChild(textDelete);
    p.appendChild(spanDelete);
    outPut.appendChild(p);
    span.style.marginRight="15px";
    p.style.marginLeft="-70px";
    span.style.color="green";
    span.style.cursor="pointer";
    spanDelete.style.color="red";
    spanDelete.style.cursor="pointer";
    p.addEventListener("click",function(){
        span.style.textDecoration="line-through"
    })
    var deleteSpanParent=document.createAttribute("onclick");
     deleteSpanParent.value="this.parentNode.remove()";
     spanDelete.setAttributeNode(deleteSpanParent);


}

document.getElementById("btn").onclick=function(){
    add();
    
}
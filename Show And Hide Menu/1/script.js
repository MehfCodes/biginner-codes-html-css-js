/* Specifies variables*/
var spanShow=document.getElementsByClassName("spanShow");
var spanShow2=document.getElementsByClassName("spanShow2");
var hide=document.getElementsByClassName("hide");
var border=document.getElementsByTagName("p");
/* Events */
 spanShow[0].onclick=function()
 {
     show();
 }
 spanShow2[0].onclick=function()
 {
     hidden();
 }
 
 
 
 
 
 
 /* Functions */
 function show()
{
    hide[0].style.display="block";
    spanShow[0].style.display="none";
    spanShow2[0].style.display="block";
   border[0].style.borderBottom="none";
}

function hidden()
{
    hide[0].style.display="none";
    spanShow[0].style.display="block";
    spanShow2[0].style.display="none";
    border[0].style.borderBottom="2px solid black";
}
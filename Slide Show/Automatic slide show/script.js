var k=0;
slideshow();
function slideshow()
{
    var container=document.getElementsByClassName("container");
    
    
    for(var i=0;i<container.length;i++)
        {
            container[i].style.display="none";
        }
    
    k++;
    
    if(k>container.length)
        {
            k=1;
        }
    
    container[k-1].style.display="block";
    setTimeout(slideshow,3000);
}

  
   /* $(".fa").click(function(){
       $("#container").css("left","30px");
      if( $(this).hasClass("fa-wpforms"))
      {
         $(this).removeClass("fa-wpforms");
          $(this).addClass("fa-close");
      }
      
      else if( $(this).hasClass("fa-close"))
      {
         $(this).removeClass("fa-close");
          $(this).addClass("fa-wpforms");
           $("#container").css("left","-310px");
      }
    })
    */
   var pattern=/[QWERTYUIOPASDFGHJKLZXCVBNM]/g;
   var pattern2=/[123456789]/g;
   
  var password= document.getElementById("pass").value;
  var test1= pattern.test(password);
  var test2=/\d/.test(password);
  var errorm=document.getElementById("para");
  var errms=""
    document.getElementById("submit").onclick=function()
    {
   
  
     if(!(test1 && test2)){
        errorm.innerHTML="Password is not True";
        document.getElementById("pass").value="";
  
     }

   
  
     
   }
  
   
    

    
  

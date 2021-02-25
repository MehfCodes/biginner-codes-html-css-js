$(document).ready(function(){
  $(".ss").click(function(){
  $(".sub").toggle("slow");
     $(".sub2").hide("slow");
     $(".ss").toggleClass("rotate","slow");
     $(".ss2").removeClass("rotate","slow");

});
   $(".ss2").click(function(){
  $(".sub2").toggle("slow");
      $(".sub").hide("slow");
      $(".ss2").toggleClass("rotate","slow");
      $(".ss").removeClass("rotate","slow");
   });
  
})
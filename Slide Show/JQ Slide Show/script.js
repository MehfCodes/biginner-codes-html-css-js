
$(document).ready(function(){
  slideShow();
 

    function slideShow()
    {
        if($('.now').next('img').length>0)
        {
           $('.now').next('img').addClass('now');
           $('.now').first().removeClass('now');
        }
        else{
           $('#container').find('img').first().addClass('now');
           $('.now').last().removeClass('now');
           $('#container').find('img').first().addClass('now');
        }
        setTimeout(slideShow,4000);
    }
})
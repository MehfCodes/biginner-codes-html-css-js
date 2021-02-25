$(document).ready(function(){
    $('.head').click(function(){
        $(this).next('.submenu').addClass('now');
        $(this).next('.submenu').slideToggle('slow').toggleClass('rotate');
        $(this).siblings('.submenu').not(".now").slideUp('slow');
        $(this).next('.submenu').removeClass('now');
        
       
    })
})
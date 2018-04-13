

$(function () {
    
    'use strict';
    
    // Give Active Class
    
    $('.item').first().addClass('active-sales');
    
    // Show First Info
    
    $('.info').first().show().animate({width: '50%'});
    
    // Show Info On Click
    
    $('.item').click(function () {
        
        $(this).addClass("active").siblings('.item').removeClass('active');
        
        $(this).next().show().animate({width: '40%'}).siblings('.info').animate({width: 0}, function () {
            
            $(this).hide();
            
        });
        
    });
    
});
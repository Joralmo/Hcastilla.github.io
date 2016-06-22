'use strict';

$(document).ready(function(){

    $('a.scroll').on('click',function(e){
        e.preventDefault();
        let element = $(this).attr('href');
        let pos = $(element).position();
        $('html,body').animate({
            scrollTop:pos.top
        },800)
    });
    
});



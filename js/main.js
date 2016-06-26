

$(window).load(function() {
	
	$("#pageLoader").delay(2000).fadeOut(2000,function(){
		$('html').css('overflow-y','initial');
		$('body').css('overflow-y','initial');

		$.getScript('js/libs.js',function(a){
			$('head').append('<script type="text/javascript"  src="js/main.js">'+a+'</script>');
		});

		$.getScript('js/cubo.js',function(a){
			$('head').append('<script type="text/javascript"  src="js/main.js">'+a+'</script>');
				
			$.getScript('js/selectPlot.js',function(a){
				$('head').append('<script type="text/javascript"  src="js/main.js">'+a+'</script>');
			});
			
		});
	});
});


$(document).ready(function(){

	/* Animacion del scroll */
    
    $('a.scroll').on('click',function(e){
        e.preventDefault();
        let element = $(this).attr('href');
        let pos = $(element).position();
        $('html,body').animate({
            scrollTop:pos.top
        },'slow')
    });

    /****************************************/

    /* */
 });









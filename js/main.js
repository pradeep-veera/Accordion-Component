/*
Javascript file.

Purpose: To load the content of the static file on activating the tabs.
*/

$(document).ready(function() {

    $('.button').click(function() {   
        var button = $(this);
        var status = $(this).attr('id');


        // To make the status of the tab as active.    
        if($('.button').hasClass('active')){
            $('.button').removeClass('active'); 
            $(this).addClass('active');
        }else {
            $(this).addClass('active');
        }        
        

        // Check fot the width of the device
        // Mobile device width (<= 768px)
        if (window.innerWidth <= 768) {
            var button = $(this);
            var status = $(this).attr('id');
            // Check the button id to load the content accordingly
            if(status == "button_1"){
                // Load the static content for 1st tab
                $('#mobile_content_1 div.text').load('buffer_1.html');
                // Display only the div of 1st tab and hide div's of other tab's
                $('#mobile_content_1').css('display','block');
                $('#mobile_content_2').css('display','none');
                $('#mobile_content_3').css('display','none');
            }else if(status == "button_2"){
                 // Load the static content for 2nd tab
                $('#mobile_content_2 div.text').load('buffer_2.html');
                 // Display only the div of 2nd tab and hide div's of other tab's
                $('#mobile_content_1').css('display','none');
                $('#mobile_content_2').css('display','block');
                $('#mobile_content_3').css('display','none');                
            }else if(status == "button_3"){
                 // Load the static content for 3rd tab
                $('#mobile_content_3 div.text').load('buffer_3.html');
                 // Display only the div of 3rd tab and hide div's of other tab's
                $('#mobile_content_1').css('display','none');
                $('#mobile_content_2').css('display','none');
                $('#mobile_content_3').css('display','block');                
            }
        }else {
             // Device width >=768px
            if(status == "button_1"){
              // Load the content of the 1st tab
                $('.text_container div.text').load('buffer_1.html');
            }else if(status == "button_2"){
              // Load the content of the 2nd tab
                $('.text_container div.text').load('buffer_2.html');
            }else if(status == "button_3"){
                // Load the content of the 3rd tab
                $('.text_container div.text').load('buffer_3.html');
            }                
        }
    });
});

// JavaScript Document
/*
function load_file(file, element){
    console.log(this);    
	$(element).load(file);
}
*/
$(document).ready(function() {
    if (window.innerWidth <= 768) {
        $('.button').click(function(event) {
            console.log("mobile");
            var button = $(this);
            var status = $(this).attr('id');
            var text = $(this).next();
            if(status == "button_1"){
                $('#mobile_content_1 div.text').load('buffer_1.html');
            }else if(status == "button_2"){
                $('#mobile_content_2 div.text').load('buffer_2.html');
            }else if(status == "button_3"){
                $('#mobile_content_3 div.text').load('buffer_3.html');
            }
        });
    }else{
        $('.button').click(function(event) {
            console.log("desktop");
            var button = $(this);
            var status = $(this).attr('id');
            if(status == "button_1"){
                $('.text_container div.text').load('buffer_1.html');
            }else if(status == "button_2"){
                $('.text_container div.text').load('buffer_2.html');
            }else if(status == "button_3"){
                $('.text_container div.text').load('buffer_3.html');
            }
        }); 
    }    
});
/*
$(document).ready(function() {
    $(".button").click(function() {
        $.ajax({
            url : "buffer.txt",
            dataType: "text",
            success : function (data) {
                $("#text").html(data);
            }
        });
    });
}); */
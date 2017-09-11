// JavaScript Document
/*
function load_file(file, element){
    console.log(this.title);    
	$(element).load(file);
}
*/
$(document).ready(function() {
    $('.button').click(function(event) {
        var button = $(this);
        var status = $(this).attr('id');
        var text = button.closest('div').attr('text');
    });
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
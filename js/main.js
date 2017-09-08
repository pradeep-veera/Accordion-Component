// JavaScript Document

$(document).ready(function() {
    $('.button').click(function() {
        $(this).find(".text").load("buffer.txt");
        //$('.text').load("buffer.txt");
        console.log($(this).find(".text").load("buffer.txt"));
    });
});
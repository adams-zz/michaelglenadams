$(document).ready(function(){
    $('.box').mouseenter(function(){
        // $(this).addClass('greyed')
        $(this).children().show("easing");
    })
    $('.box').mouseleave(function(){
        // $(this).removeClass('greyed')
        $(this).children().hide("easing");
    })
})
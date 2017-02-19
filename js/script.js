$(function(){

    $(".color-pallete span").each(function(){
        var _color = $(this).parent("td").text();
        $(this).css("background",_color);
    });

    setInterval(function(){
        location.reload();
    },2000);

});
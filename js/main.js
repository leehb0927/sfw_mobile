$(document).ready(function(){
    $('.main_visual_imgs').slick({
        autoplay:true,
        autoplaySpeed:2000,
        speed:1000,
        arrows:false,
        dots:true,
    });
});

$('.scheduleSlider').slick();

$('.socialHub_inner').slick();

$('.hamburger').click(function(){
    $(this).toggleClass('open');

    if($(this).hasClass('open')){
        $('#lnb').animate({right:0},500);
    }
})
$('.lnb_close').click(function(){
    $(this).toggleClass('close');

    if($(this).hasClass('close')){
        $('#lnb').animate({right:-500},500);
    }

});


function winOpen(){
    window.open('../index.html', 'width:500')
}
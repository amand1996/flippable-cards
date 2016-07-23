$(function($) {
    $("#card1").flip({
        axis: 'y',
        trigger: 'click'
    });
    $("#card1").on('click', function(){
        $("#card2").flip(false);
        $("#card3").flip(false);
        $("#card4").flip(false);
        $("#card5").flip(false);
        $("#card6").flip(false);
    });
    $("#card2").flip({
        axis: 'y',
        trigger: 'click'
    });
    $("#card2").on('click', function(){
        $("#card1").flip(false);
        $("#card3").flip(false);
        $("#card4").flip(false);
        $("#card5").flip(false);
        $("#card6").flip(false);
    });
    $("#card3").flip({
        axis: 'x',
        trigger: 'click'
    });
    $("#card3").on('click', function(){
        $("#card2").flip(false);
        $("#card1").flip(false);
        $("#card4").flip(false);
        $("#card5").flip(false);
        $("#card6").flip(false);
    });
    $("#card4").flip({
        axis: 'x',
        trigger: 'click'
    });
    $("#card4").on('click', function(){
        $("#card2").flip(false);
        $("#card3").flip(false);
        $("#card1").flip(false);
        $("#card5").flip(false);
        $("#card6").flip(false);
    });
    $("#card5").flip({
        axis: 'y',
        trigger: 'click'
    });
    $("#card5").on('click', function(){
        $("#card2").flip(false);
        $("#card3").flip(false);
        $("#card4").flip(false);
        $("#card1").flip(false);
        $("#card6").flip(false);
    });
    $("#card6").flip({
        axis: 'y',
        trigger: 'click'
    });
    $("#card6").on('click', function(){
        $("#card2").flip(false);
        $("#card3").flip(false);
        $("#card4").flip(false);
        $("#card5").flip(false);
        $("#card1").flip(false);
    });
});
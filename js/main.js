$(document).ready(function () {
    var game;
    var board = $('.container');

    game = new Game({
        board: board,
    });
    $(".start").click(function () {
        $(".start").toggle();
        $('#ball').toggle();
        game.start();
    });


    $('#pause').on('click', function () {
        if (game.gameControl) {
            $(this).html('Ready')
        } else if (!game.gameControl) {
            $(this).html('Pause')
        }
        game.pause();
    })

});



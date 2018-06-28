function Game(options) {
    this.score = 0;
    this.time = 30;
    this.moles;
    this.numMoles = 9;
    this.board = options.board;
    this.gameControl = true;
    this.intervalGame = undefined;
    this.intervalTimer = undefined;
}

Game.prototype.start = function(){
    this._createMoles();
    this._playMoles();
    this._hitMoles();
    this._timer();
}

Game.prototype._status = function(){
    this._setScore();
}

Game.prototype._createMoles = function(){
    for(var i=0; i<this.numMoles; i++){
        var newMole = $('<div>');
        newMole.addClass('mole');
        this.board.append(newMole);
    }
}

Game.prototype._playMoles = function(){
    this.intervalGame = setInterval(function(){
        this.moles = $('.mole');
        var numMole = Math.floor(Math.random() * (9 - 0)) + 0;
        this.moles[numMole].classList.add('show');
        setTimeout(function(){
            this.moles[numMole].classList.remove('show');
        }.bind(this),5000);
    },2500)
}

Game.prototype._hitMoles = function(){
    var that = this;
    $('.container').on('click', '.mole', function(){
        if($(this).hasClass('show')){
            $(this).removeClass('show');
            that.score++;
            that._status();
        };
    })
}

Game.prototype._setScore = function(){
    $('#score').html(this.score)
}

Game.prototype.pause = function(){
    if(this.gameControl){
        clearInterval(this.intervalGame);
        clearInterval(this.intervalTimer);
        _gameover();
        this.gameControl = !this.gameControl;
    } else if (!this.gameControl){
        this._playMoles();
        this._timer();
        this.gameControl = !this.gameControl;
    }
}

Game.prototype._timer = function(){
    $('#timer').html(this.time);
    this.intervalTimer = setInterval(function(){
        if (this.time < 0) {
            clearInterval(this.intervalGame);
            clearInterval(this.intervalTimer);
        } else {
            $('#timer').html(this.time);
            this.time--;
        }
    }.bind(this), 1000); 
} 
 
Game.prototype._gameOver = function(){
 

}

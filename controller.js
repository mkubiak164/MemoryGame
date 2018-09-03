var lastClickedElementID;

document.addEventListener('click', function(e) {
    e = e || window.event;
    var target = e.target || e.srcElement;
        lastClickedElementID = target.id !== "" && target.id.includes("square")? target.id : -1;
    var squareWasClicked = lastClickedElementID !== -1;
    var piecesToGuess = game.getHighlightedPieces();

    if (squareWasClicked) {
        if (guessWasRight(lastClickedElementID)) {
            // if(piecesToGuess.length > 1) { //ten if dac do removePieceFromList
            view.highlightPieceInGreen(lastClickedElementID);
            game.removePieceFromList(lastClickedElementID);
            // } else {
            //     var currentLevel = game.getCurrentLevel();
            //     var newCurrentLevel = currentLevel + 1;
            //     game.setCurrentLevel(newCurrentLevel);
            //     view.highlightPieceInGreen(lastClickedElementID);
            //     setTimeout(function(){
            //         startGame();
            //     }, 3000);
            // }

        } else {
            view.highlightPieceInRed(lastClickedElementID);

        }
    }
    // odpytać game ile zostało jeszcz kawłkkó

}, false);

var controller = function () {

    var startGame = function () {
        var pieces = game.generateBoard(),
            gameboard = document.getElementsByClassName("gameboard")[0];

        for (var i = 0; i < pieces.length; i++) {
            var piece = pieces[i];
            gameboard.appendChild(piece);
        }
    },

    generateBoard = function () {
        game.generateBoard();
    },

    highlightPieceInGreen = function () {
        view.highlightPieceInGreen(lastClickedElementID);
    },

    setHighlightTime = function (newHighlightTime) {
        game.setHighlightTime(newHighlightTime);
    },

    getHighlightTime = function () {
        return game.getHighlightTime();
    },

    getClickedElementID = function () {
        return lastClickedElementID;
    },

    getAllCurrentPieces = function () {
        return game.getAllCurrentPieces();
    },

    getPiecesToHighlight = function () {
        return game.getPiecesToHighlight();
    },

    guessWasRight = function () {
        // var lastClickedElementID = getClickedElementID();
        return game.guessWasRight(lastClickedElementID);
    }


    return {
        'startGame': startGame,
        'generateBoard': generateBoard,
        'setHighlightTime': setHighlightTime,
        'getHighlightTime': getHighlightTime,
        'getClickedElementID' : getClickedElementID,
        'getAllCurrentPieces' : getAllCurrentPieces,
        'getPiecesToHighlight' : getPiecesToHighlight,
        'guessWasRight': guessWasRight,
        'highlightPieceInGreen': highlightPieceInGreen
    }
}();

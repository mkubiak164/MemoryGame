var game = (function () {

    const initialNumberOfPieces = 4;
    var currentLevel = 0,
        allCurrentPieces = [],
        highlightTime = 3000,
        highlightedPieces = [],
        piecesToGuess = 0;

    generateBoard = function () {
        allCurrentPieces = [];
        var gameboard = document.getElementsByClassName("gameboard")[0],
            numberOfPieces;

        gameboard.innerHTML = '';
        numberOfPieces = getNumberOfPiecesOnCurrentLevel();

        for (var i = 0; i < numberOfPieces; i++) {
            var piece = document.createElement("div");
            piece.className += "square standard";
            piece.id += 'square' + i;
            allCurrentPieces.push(piece);
        }
        return allCurrentPieces;
    },

    getPiecesToHighlight = function () {
        var howMany = getNumberOfPiecesToHighlight(),
            piecesToHighlight = [];

        for (var i = 0; i < howMany; ) {
            var drawedNumber = Math.round(Math.random() * (allCurrentPieces.length - 1));
            if (piecesToHighlight.indexOf(allCurrentPieces[drawedNumber]) === -1) {
                var pieceToHighlight = allCurrentPieces[drawedNumber];
                piecesToHighlight.push(pieceToHighlight);
                i++;
            }
        }

        highlightedPieces = piecesToHighlight;
        piecesToGuess = piecesToHighlight.length;
        return piecesToHighlight;
    },

    getPiecesToGuess = function () {
        return piecesToGuess;
    },

    reduceNumberOfPiecesToGuess = function () {
        piecesToGuess--;
    },

    getNumberOfPiecesOnCurrentLevel = function () {
        return initialNumberOfPieces + (2 * currentLevel);
    },

    getNumberOfPiecesToHighlight = function () {
        var currentNumberOfPieces = getNumberOfPiecesOnCurrentLevel();
        return (currentNumberOfPieces / 2) - 1;
    },

    getAllCurrentPieces = function () {
        return allCurrentPieces;
    },

    getMorePieces = function () {
        currentLevel = currentLevel + 1;
        view.startGame();
    },

    setHighlightTime = function (newHighlightTime) {
        highlightTime = newHighlightTime;
    },

    getHighlightTime = function () {
        return highlightTime;
    },

    getCurrentLevel = function () {
        return currentLevel;
    },

    setCurrentLevel = function (newCurrentLevel) {
        currentLevel = newCurrentLevel;
    },

    getHighlightedPieces = function () {
        return highlightedPieces;
    },

    guessWasRight = function (lastClickedElementID) {
        var highlightedPiecesIDs = getPiecesIDs(highlightedPieces);
        return highlightedPiecesIDs.includes(lastClickedElementID);
    },

    getPiecesIDs = function (highlightedPieces) {
        var piecesIDs = [];
        for(var i=0; i < highlightedPieces.length; i++) {
           piecesIDs.push(highlightedPieces[i].id);
        }
        return piecesIDs;
    },

    resetLevel = function () {
        currentLevel = 0;
    },

    removePieceFromList = function (elementToRemoveID) {
        var elementToRemove = document.getElementById(elementToRemoveID),
            indexToRemove = highlightedPieces.indexOf(elementToRemove);

        highlightedPieces.splice(indexToRemove, 1);
        if (getHighlightedPieces().length === 0) {
            setCurrentLevel(getCurrentLevel() + 1);
            controller.highlightPieceInGreen(lastClickedElementID);
            setTimeout(function(){
                startGame();
                highlightPiecesInBlue();
            }, 3000);
        }
    };

    return {
        'generateBoard': generateBoard,
        'getNumberOfPiecesOnCurrentLevel': getNumberOfPiecesOnCurrentLevel,
        'getPiecesToHighlight': getPiecesToHighlight,
        'getAllCurrentPieces': getAllCurrentPieces,
        'getMorePieces' : getMorePieces,
        'setHighlightTime': setHighlightTime,
        'getHighlightTime': getHighlightTime,
        'getCurrentLevel' : getCurrentLevel,
        'setCurrentLevel' : setCurrentLevel,
        'getHighlightedPieces' : getHighlightedPieces,
        'guessWasRight' : guessWasRight,
        'removePieceFromList' : removePieceFromList,
        'reduceNumberOfPiecesToGuess': reduceNumberOfPiecesToGuess,
        'getPiecesToGuess': getPiecesToGuess,
        'resetLevel': resetLevel,
        'getPiecesIDs': getPiecesIDs,
    };

}());


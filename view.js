var view = (function () {

    // const initialNumberOfPieces = 4;
    var allPiecesOnBoard;

    startGame = function () {
        controller.startGame();
    },

    getInitialNumberOfPieces = function () {
        //donm
    },

    getHighlightTime = function () {
        return controller.getHighlightTime();
    };

    setHighlightTime = function (newHighlightTime) {
        controller.setHighlightTime(newHighlightTime * 1000);
    };

    highlightPiecesInBlue = function() {
        //start game at current level
        startGame();
        allPiecesOnBoard = controller.getAllCurrentPieces();
        var piecesToHighlight = controller.getPiecesToHighlight();

        setPieceClass(piecesToHighlight, "square blue");

        setTimeout(function(){
            setPieceClass(piecesToHighlight, "square standard");
        }, getHighlightTime());

        return allPiecesOnBoard;
    },

    setPieceClass = function (piecesToHighlight, pieceClass) {
        for (var i = 0; i < piecesToHighlight.length; i++) {
            var piece = getPieceByID(piecesToHighlight[i].id);
            piece.className = pieceClass;
        }
    },

    getPieceByID = function(pieceID) {
        return document.getElementById(pieceID);
    },

    highlightPieceInRed = function (lastClickedElementID) {

        var piece = getPieceByID(lastClickedElementID);
        piece.className = "square red";

        setTimeout(function () {
            highlightPiecesInBlue();
        }, 2000);

    },

    highlightPieceInGreen = function (lastClickedElementID) {
        var piece = getPieceByID(lastClickedElementID);
            piece.className = "square green";
            setTimeout(function () {
                piece.className = "square standard";
        }, 2000);
    };





    return {
        'startGame': startGame,
        'getInitialNumberOfPieces': getInitialNumberOfPieces,
        'highlightPiecesInBlue': highlightPiecesInBlue,
        'setHighlightTime': setHighlightTime,
        'getHighlightTime': getHighlightTime,
        'highlightPieceInRed' : highlightPieceInRed,
        'highlightPieceInGreen' : highlightPieceInGreen
    };

}());


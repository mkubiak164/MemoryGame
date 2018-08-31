var game = (function () {

    const initialNumberOfPieces = 4;
    var currentLevel = 0;
    var allCurrentPieces = [];

    generateBoard = function () {
        var numberOfPieces = getNumberOfPiecesOnCurrentLevel(),
            gameboard = document.getElementsByClassName("gameboard")[0];

        for(var i=0; i<numberOfPieces; i++) {
            var piece = document.createElement("div");
            piece.className += "square.standard";
            piece.id += i;
            allCurrentPieces.push(piece.id);
            gameboard.appendChild(piece);
        }
    };

    getPiecesToHighlight = function() {
        var all = getNumberOfPiecesOnCurrentLevel();
        var howMany = getNumberOfPiecesToHighlight();

        var piecesToHighlight = new Array();

        for(var i=0; i<howMany; i++) {
            var los = Math.round(Math.random()*(allCurrentPieces.length-1));
            jest = false;
            for (var j=0;j<l.length;j++) {
                if (piecesToHighlight[j] == los) jest = true;
                if (jest) i--;
                else piecesToHighlight[i] = los;
            }
        }
        return piecesToHighlight;
    }

    getNumberOfPiecesOnCurrentLevel = function () {
        return initialNumberOfPieces + (2 * currentLevel);
    };

    getNumberOfPiecesToHighlight = function () {
        var currentNumberOfPieces = getNumberOfPiecesOnCurrentLevel();
        return (currentNumberOfPieces/2) -1;
    }


    return {
        'generateBoard': generateBoard,
        'getNumberOfPiecesOnCurrentLevel': getNumberOfPiecesOnCurrentLevel,
        'getPiecesToHighlight' : getPiecesToHighlight
    };

}());


// const game = (function () {
//
//         const initialLevel = 0;
//         const initialNumberOfPieces = 4;
//         let divBoard = null;
//         let currentLevel = 0;
//         let pieces = [];
//         let piecesToCheck = [];
//         let piecesChecked = [];
//         let currentNumberOfPieces;
//
//
//     var newdiv = document.createElement("DIV");
//     newdiv.appendChild(document.createTextNode("some text"));
//     document.body.appendChild(newdiv);
//
//         startGame = function (config) {
//             if (config && config.numberOfPieces) {
//                 currentNumberOfPieces = config.numberOfPieces;
//             } else {
//                 currentNumberOfPieces = initialNumberOfPieces;
//             }
//
//         },
//
//         getPieces = function () {
//             var i,
//                 pieces = [];
//
//             for(i=0; i < currentNumberOfPieces; i++) {
//                 pieces.push({});
//             }
//             pieces[0].toGuess = true;
//             return pieces;
//         };
//
//         getNumberOfPiecesOnCurrentLevel = function () {
//             currentNumberOfPieces = initialNumberOfPieces + (2*currentLevel)
//             return currentPieces;
//
//         };
//
//         getNumberOfPiecesToHighlight = function () {
//
//             var numberOfPiecesToHighlight;
//                return numberOfPiecesToHighlight = (currentNumberOfPieces/2) -1;
//
//         };
//
//         getPiecesToHighlight = function () {
//             l = [];
//             var number = getNumberPiecesToHighlight();
//             for(i=0; i<=number; i++) {
//               los = Math.round(Math.random()*currentNumberOfPieces-1));
//
//             }
//         };
//
//
//
//     return {
//         'startGame': startGame,
//         'getPieces': getPieces
//     }
// }());

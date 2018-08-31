var view = (function () {

    const initialNumberOfPieces = 4;

    drawPieces = function () {
        game.generateBoard();
        let square = document.createElement("DIV");
        square.appendChild(document.createElement("square"));
        document.body.appendChild(square);
    };

    getInitialNumberOfPieces = function () {
        //donm
    };

    highlightPiecesInBlue = function() {
        var piecesBlue = game.getPiecesToHighlight();
        var square = game.getElementById('square')
        for(var i; i<piecesBlue.length; i++) {
                piecesBlue[i] = "squareBlue";
        };

    }



    return {
        'getInitialNumberOfPieces': getInitialNumberOfPieces,
        'drawPieces': drawPieces,
        'highlightPiecesInBlue' : highlightPiecesInBlue
    };

}());


// var view = (function () {
//     var getInitialNumberOfPieces = function () {
//         //donm
//     };
//
//
//
//     hilight = function () {
//
//     };
//
//     drawPieces = function () {
//
//
//         let square = document.createElement("DIV");
//         square.appendChild(document.createElement("square");
//         document.body.appendChild(square);
//
//     };
//
//     return {
//         'getInitialNumberOfPieces': getInitialNumberOfPieces
//         'drawPieces': drawPieces
//     };
//
// }());
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


describe('game', function () {

    it('should have 4 initial pieces', function () {
        var numberOfPieces = getNumberOfPiecesOnCurrentLevel();
        expect(numberOfPieces).toBe(4);
    });

    it('should highlight 1 pieces on start', function () {
        var numberOfPiecesToHighlight = getNumberOfPiecesToHighlight();
        expect(numberOfPiecesToHighlight).toBe(1);
    });

    it('should not have elements', function () {
        var currentPieces = getAllCurrentPieces();
        expect(currentPieces.length).toBe(0);
    });

    it('should set highlightTime', function () {
        view.setHighlightTime(1);

        expect(game.getHighlightTime()).toBe(1000);
    });

    it('should set highlightTime', function () {
        spyOn(game, 'guessWasRight').and.returnValue(true);

        var result = controller.guessWasRight();

        expect(result).toBe(true);
    });

    //NOT WORKING
    //karma doesn't see document

    // it('one piece should be to guess after 1st blue highlight', function () {
    //     view.startGame();
    //     view.highlightPiecesInBlue();
    //
    //     var piecesToGuess = findPiecesToGuess(game.getPiecesToHighlight());
    //     expect(piecesToGuess.length).toBe(1);
    // });
    //
    //
    // function findPiecesToGuess(pieces) {
    //     return pieces.filter(function (piece) {
    //        return piece.toGuess;
    //     });
    // }
});

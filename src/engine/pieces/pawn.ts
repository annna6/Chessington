import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) : Square[] {
        const currentPosition : Square = board.findPiece(this);
        const moves : Square[] = [];
        if (currentPosition.row < 7) {
            moves.push(new Square(currentPosition.row + 1, currentPosition.col));
        }
        if (currentPosition.row >= 1) {
            moves.push(new Square(currentPosition.row - 1, currentPosition.col));
        }
        return moves;
    }
}

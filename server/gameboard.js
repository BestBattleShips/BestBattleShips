
class Board{
  constructor(player, rows, cols) {
    this.player = player;
    this.board = [];
    for(let i = 0; i < cols; i++) {
      this.board.push(Array(rows).fill(0))
    }    
  }

  placePieces(row, col) {
    console.log('hello from pieces')
    this.board[row][col] = 1
    return 'hello';
  }

}

const player1 = new Board(1,8,8);

const player2 = new Board(2,8,8);


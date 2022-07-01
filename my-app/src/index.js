import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/*
var player = {score: 1, name: 'Jeff'};

var newPlayer = Object.assign({}, player, {score: 2});
// Agora o player não sofreu alteração, mas o newPlayer é {score: 2, name: 'Jeff'}

// Ou então se você estiver usando a sintaxe "object spread", você pode escrever:
// var newPlayer = {...player, score: 2};











class Square extends React.Component {/*O componente Square renderiza um único <button> .

render() {
  return (
    <button
      className="square"
      onClick={() => this.props.onClick()}
    >
      {this.props.value}
    </button>
  );/*Para salvar a digitação e evitar o comportamento confuso de this,vamos usar a sintaxe arrow function para manipuladores de eventos: 
}
}
*/
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  )
}


class Board extends React.Component {/*e o Board renderiza 9 squares. */
  constructor(props) {
    super(props);
    this.state= {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }
  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

renderSquare(i) {/* Nós quebramos o retorno do elemento em várias linhas para melhorar a legibilidade e adicionamos parentesis para que o JavaScript não insira ponto e virgula após o return e quebre o código*/  
  return (
    <Square
      value={this.state.squares[i]}
      onClick={() => this.handleClick(i)}
    />
  );
}

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner : ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
  }
   

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
    }
}

class Game extends React.Component {/* O Game renderiza um Board com valores que modificaremos mais tarde.*/
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

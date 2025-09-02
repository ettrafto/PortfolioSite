import React, { useEffect, useState } from 'react';
import './Mastermind.css';
import GameBoard from './components/GameBoard';

const generateSecretCode = () => {
  const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple'];
  let code = [];
  for (let i = 0; i < 4; i++) {
    code.push(colors[Math.floor(Math.random() * colors.length)]);
  }
  return code;
};

const Mastermind = () => {
  const [secretCode, setSecretCode] = useState(generateSecretCode());
  const [guesses, setGuesses] = useState([]);
  const [feedback, setFeedback] = useState([]);
  const [currentGuess, setCurrentGuess] = useState(['', '', '', '']);
  const [activeRow, setActiveRow] = useState(0);
  const [message, setMessage] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [didWin, setDidWin] = useState(null);

  const [timeElapsed, setTimeElapsed] = useState(0); // seconds
  const [triesRemaining, setTriesRemaining] = useState(12);

  const handleGuess = () => {
    if (currentGuess.includes('')) return;
    const newFeedback = getFeedback(secretCode, currentGuess);
    setGuesses([...guesses, currentGuess]);
    setFeedback([...feedback, newFeedback]);
    setTriesRemaining(prev => Math.max(0, prev - 1));

    if (newFeedback.correct === 4) {
      setMessage('You Win! Play Again?');
      setDidWin(true);
      setGameOver(true);
    } else if (guesses.length + 1 === 12) {
      setMessage('You Lose! Play Again?');
      setDidWin(false);
      setGameOver(true);
    } else {
      setCurrentGuess(['', '', '', '']);
      setActiveRow(activeRow + 1);
    }
  };

  const getFeedback = (code, guess) => {
    let feedback = { correct: 0, wrongPlace: 0, empty: 4 };
    let codeCopy = [...code];
    let guessCopy = [...guess];

    // Check for correct color and position
    for (let i = 0; i < 4; i++) {
      if (guessCopy[i] === codeCopy[i]) {
        feedback.correct++;
        feedback.empty--;
        codeCopy[i] = null;
        guessCopy[i] = null;
      }
    }

    // Check for correct color but wrong position
    for (let i = 0; i < 4; i++) {
      if (guessCopy[i] && codeCopy.includes(guessCopy[i])) {
        feedback.wrongPlace++;
        feedback.empty--;
        codeCopy[codeCopy.indexOf(guessCopy[i])] = null;
      }
    }

    return feedback;
  };

  const resetGame = () => {
    setSecretCode(generateSecretCode());
    setGuesses([]);
    setFeedback([]);
    setCurrentGuess(['', '', '', '']);
    setActiveRow(0);
    setMessage('');
    setGameOver(false);
    setDidWin(null);
    setTimeElapsed(0);
    setTriesRemaining(12);
  };

  useEffect(() => {
    if (gameOver) return;
    const intervalId = setInterval(() => {
      setTimeElapsed(prev => prev + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [gameOver, secretCode]);

  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
    const seconds = (totalSeconds % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="mastermind">
      <div className="mastermind-card">
        <h1>Mastermind</h1>
        <div className="status-bar">
          <div className="status-item">
            <span className="label">Time</span>
            <span className="value" aria-live="polite">{formatTime(timeElapsed)}</span>
          </div>
          <div className="status-item">
            <span className="label">Tries Left</span>
            <span className="value" aria-live="polite">{triesRemaining}</span>
          </div>
          <div className="status-actions">
            <button className="secondary-button" onClick={resetGame}>Reset</button>
          </div>
        </div>

        <details className="instructions">
          <summary>How to Play</summary>
          <div className="instructions-content">
            <ul>
              <li>Guess the secret 4-color code.</li>
              <li>You have 12 tries.</li>
              <li>Correct color + position = black peg.</li>
              <li>Correct color, wrong position = white peg.</li>
              <li>Empty means no match.</li>
            </ul>
          </div>
        </details>

        <GameBoard
        guesses={guesses}
        feedback={feedback}
        currentGuess={currentGuess}
        setCurrentGuess={setCurrentGuess}
        handleGuess={handleGuess}
        activeRow={activeRow}
        gameOver={gameOver}
        triesRemaining={triesRemaining}
      />
        <div className="status">
          {message ? (
            <div className="endgame">
              <p className={`status-message ${didWin ? 'win' : 'lose'}`}>{message}</p>
              <button className="primary-button" onClick={resetGame}>Play Again</button>
            </div>
          ) : (
            <p className="placeholder" aria-hidden="true"></p>        
          )}
        </div>
      </div>
    </div>
  );
};

export default Mastermind;

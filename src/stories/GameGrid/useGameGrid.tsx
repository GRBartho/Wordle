import { useEffect, useState } from "react";

const useGameGrid = (word: string) => {
  const [attempt, setAttempt] = useState([
    { attempt: 0, typedWord: "" },
    { attempt: 1, typedWord: "" },
    { attempt: 2, typedWord: "" },
    { attempt: 3, typedWord: "" },
    { attempt: 4, typedWord: "" },
    { attempt: 5, typedWord: "" },
    { attempt: 6, typedWord: "" },
  ]);

  const [currentAttempt, setCurrentAttempt] = useState(0);
  const [typedWord, setTypedWord] = useState("");
  const [win, setWin] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  function updateAttempt(typedWord: string) {
    if (typedWord.length !== word.length) {
      return;
    }
    if (typedWord === word) {
      setWin(true);
    }
    if (currentAttempt === 6) {
      setGameOver(true);
      return;
    }
    setAttempt((prev) => {
      prev.map((a: any) => {
        a.attempt === currentAttempt
          ? (a.typedWord = typedWord)
          : (a.typedWord = a.typedWord);
      });
      setCurrentAttempt(currentAttempt + 1);
      setTypedWord("");
      return prev;
    });
  }

  function keyPress(e: any) {
    if (e.keyCode == 13) {
      updateAttempt(typedWord);
    }
  }

  function handleBackspace() {
    setTypedWord(typedWord.slice(0, -1));
  }

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.key === "Enter") {
        // Update attempt for enter key
        updateAttempt(typedWord);
      } else if (event.key === "Backspace") {
        // Delete last character for backspace
        handleBackspace();
      } else {
        // Update typedWord for other keys (only if the key is a letter)
        const isLetter = /^[a-zA-Z]$/.test(event.key);
        if (isLetter && typedWord.length < word.length && !win && !gameOver) {
          setTypedWord((prevTypedWord) => prevTypedWord + event.key);
        }
      }
    };

    const handleInput = (event: any) => {
      // Update typedWord for input events (only if the input is a letter)
      const isLetter = /^[a-zA-Z]$/.test(event.target.value);
      if (isLetter) {
        setTypedWord(event.target.value);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("input", handleInput);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("input", handleInput);
    };
  }, [updateAttempt, handleBackspace, setTypedWord]);

  return {
    attempt,
    currentAttempt,
    typedWord,
    win,
    gameOver,
    setTypedWord,
    updateAttempt,
    handleBackspace,
  };
};

export default useGameGrid;

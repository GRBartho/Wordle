import { useEffect } from "react";
import { Grid } from "@mui/material";
import WordContainer from "../WordContainer/WordContainer";
import { GameGridProps } from "./GameGridTypes";
import { useStyles } from "./GameGridStyles";
import useGameGrid from "./useGameGrid";

function GameGrid({ word }: GameGridProps) {
  const classes = useStyles();
  const {
    attempt,
    currentAttempt,
    typedWord,
    win,
    gameOver,
    setTypedWord,
    updateAttempt,
    handleBackspace,
  } = useGameGrid(word);

  return (
    <Grid container className={classes.container}>
      {[...Array(6)].map((_, index) => (
        <WordContainer
          key={index}
          word={word}
          confirmed={index < attempt[currentAttempt].attempt}
          typedWord={
            currentAttempt === index ? typedWord : attempt[index].typedWord
          }
        />
      ))}
    </Grid>
  );
}

export default GameGrid;

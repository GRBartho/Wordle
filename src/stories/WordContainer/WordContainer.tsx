import { Grid } from "@mui/material";
import CharacterContainer from "../CharacterContainer/CharacterContainer";
import { Key } from "react";
import { WordContainerProps } from "./WordContainerTypes";
import { useStyles } from "./WordContainerStyles";

function WordContainer({ word, confirmed, typedWord }: WordContainerProps) {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      {word.split("").map((character: string, index: number) => (
        <CharacterContainer
          key={index}
          character={typedWord[index] || ""}
          correctCharacter={character}
          confirmed={confirmed}
          word={word}
        />
      ))}
    </Grid>
  );
}

export default WordContainer;

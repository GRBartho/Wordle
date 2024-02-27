import { Grid, Input, Typography } from "@mui/material";
import useStyles from "./CharacterContainerStyles";
import { CharacterContainerProps } from "./CharacterContainerTypes";

function CharacterContainer({
  character,
  correctCharacter,
  confirmed,
  word,
}: CharacterContainerProps) {
  character = character ? character.toUpperCase() : "";
  correctCharacter = correctCharacter ? correctCharacter.toUpperCase() : "";
  word = word.toUpperCase();
  const classes = useStyles();
  const containerColor =
    confirmed && character === correctCharacter
      ? classes.containerGreen
      : confirmed && word.includes(character)
      ? classes.containerYellow
      : confirmed && !word.includes(character)
      ? classes.containerGray
      : classes.containerWhite;
  return (
    <Grid container className={containerColor}>
      <Typography fontSize={40} className={classes.text}>
        {character.length <= 1
          ? character.toUpperCase()
          : character.substr(0, 1).toUpperCase()}
      </Typography>
    </Grid>
  );
}

export default CharacterContainer;

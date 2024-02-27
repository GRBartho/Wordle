import { Theme } from "@emotion/react";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    gap: 8,
  },
  button: {
    color: "red",
  },
  textField: {
    opacity: 0,
  },
}));

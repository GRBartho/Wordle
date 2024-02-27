import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

const useStyles = makeStyles((theme: Theme) => ({
  containerWhite: {
    maxWidth: 75,
    height: 75,
    backgroundColor: "#121213",
    borderRadius: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "3px solid #D9D9D9",
  },
  containerGreen: {
    maxWidth: 75,
    height: 75,
    backgroundColor: "#121213",
    borderRadius: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "3px solid #2A531B",
  },
  containerYellow: {
    maxWidth: 75,
    height: 75,
    backgroundColor: "#121213",
    borderRadius: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "3px solid #A19B0A",
  },
  containerGray: {
    maxWidth: 75,
    height: 75,
    backgroundColor: "#121213",
    borderRadius: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "3px solid #808080",
  },
  text: {
    color: "#D9D9D9",
    textAlign: "center",
    alignItems: "center",
    alignContent: "center",
  },
}));

export default useStyles;

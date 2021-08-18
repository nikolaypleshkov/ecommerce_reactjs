import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    maxWidth: "100%",
    marginTop: "5%",
    marginLeft: "5%",
  },
  media: {
    paddingTop: "56.25%", //16 : 9
    backgroundSize: "contain",
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  cardHeader: {
    fontSize: "20px",
  },
}));

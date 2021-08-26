import { makeStyles } from "@material-ui/styles";

export default makeStyles(() => ({
  root: {
    // maxWidth: "100%",
    minWidth: "100%",
    // justifyContent: "center",
  },
  media: {
    height: " 20rem",
    objectFit: "cover",
    // minHeight: "200",
    // maxHeight: "200",
    // paddingTop: "56.25%", // 16:9
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

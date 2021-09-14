import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  formWrap: {
    // marginTop: "120px",
  },

  [theme.breakpoints.down("xs")]: {
    mainContainer: {
      flexDirection: "column-reverse",
    },
    // formWrap: { marginTop: "80px" },
  },
}));

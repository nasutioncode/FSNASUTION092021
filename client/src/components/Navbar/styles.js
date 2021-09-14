import { deepPurple } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    // position: "fixed",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "left",
    boxShadow: "none",
    backgroundColor: "#000",
    // marginTop: "12px",
  },
  heading: {
    color: "#fff",
    fontWeight: "500",
    textDecoration: "none",
  },
  image: {
    marginLeft: "15px",
  },
  brandContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  buttonStyle: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
  },

  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    width: "400px",
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    width: "400px",
  },
  userName: {
    display: "flex",
    alignItems: "center",
  },

  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },

  [theme.breakpoints.down("xs")]: {
    mainContainer: {
      flexDirection: "column-reverse",
    },
    heading: {
      fontSize: "17px",
    },
    image: {
      height: "40px",
    },
    userName: {
      display: "none",
    },
    appBar: {
      justifyContent: "center",
      alignItems: "center",
      position: "fixed",
      // marginTop: "10px",
      // marginBottom: "40px",
    },
    formWrap: { marginTop: "80px" },
    toolbar: {
      width: "150px",
    },
    profile: {
      width: "200px",
    },
    buttonStyle: {
      padding: "5px 8px",
      fontSize: "10px",
    },
  },

  [theme.breakpoints.down("md")]: {
    mainContainer: {
      flexDirection: "column-reverse",
    },
    heading: {
      fontSize: "17px",
    },
    image: {
      height: "40px",
    },
    userName: {
      display: "none",
    },
    appBar: {
      justifyContent: "center",
      alignItems: "center",
      position: "fixed",
      // marginTop: "10px",
      // marginBottom: "40px",
    },
    formWrap: { marginTop: "80px" },
    toolbar: {
      width: "150px",
    },
    profile: {
      width: "200px",
    },
    buttonStyle: {
      padding: "5px 8px",
      fontSize: "10px",
    },
  },
}));

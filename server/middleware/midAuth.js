import jwt from "jsonwebtoken";
const secret = "test";

const midAuth = async (req, res, next) => {
  try {
    //setelah user login atau sigup maka kita akan cek apakah token nya valid atau tidak
    console.log(req.headers);
    const token = req.headers.authorization.split(" ")[1];

    // token from googleAuth
    const isCustomAuth = token.length < 500;

    let decodedData;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, secret);

      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub;
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

export default midAuth;

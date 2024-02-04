const { sign, verify } = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const jwtAuth = (user) => {
  try {
    const accesstoken = sign({ userId: user._id }, process.env.ACCESS_TOKEN, {
      expiresIn: "5s",
    });
    const refreshtoken = sign({ userId: user._id }, process.env.REFRESH_TOKEN, {
      expiresIn: "1h",
    });

    return { accesstoken, refreshtoken };
  } catch (err) {``
    console.log(err);
  }
};

const jwtVerify = (req, res, next) => {
  const accesstoken = req.cookies["accesstoken"];

  if (!accesstoken) res.status(400).send({ error: "User not Authorized" });

  try {
    const validation = verify(accesstoken, process.env.ACCESS_TOKEN);
    if (validation) {
      req.authenticated = true;
      return next();
    }
  } catch (err) {
    res.send(err);
  }
};

module.exports = { jwtAuth, jwtVerify };

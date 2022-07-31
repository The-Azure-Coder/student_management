exports.CheckEmailAndName = (req, res, next) => {
  if (
    !(
      Object.keys(req.body).includes("name") &&
      Object.keys(req.body).includes("email")
    )
  ) {
    return res.status(400).json({ message: "Email or Password Missing" });
  }
  next();
};

export function errorHandler(error, req, res, next) {
  console.error(error);
  if (error.code === 11000)
    return res
      .status(409)
      .json({ message: "A candidate with this email already exists" });
  if (error.name === "ValidationError")
    return res.status(400).json({
      message: "Validation failed",
      details: Object.values(error.errors).map((x) => x.message),
    });
  if (error.name === "CastError")
    return res.status(400).json({ message: "Invalid candidate ID" });
  res.status(500).json({ message: "Internal server error" });
}

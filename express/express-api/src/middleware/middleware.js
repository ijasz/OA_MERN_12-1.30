app.use((req, res, next) => {
  console.log("middleware called");
  next();
});

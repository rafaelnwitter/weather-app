const app = require("./app");


app.listen(process.env.PORT, () => {
  console.log(`Backend is listening on port ${process.env.PORT}`);
});
const express = require("express");
const app = express();

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
app.use("/api/auth", require("./routes/auth"));

//server configurations
app.get("/", (req, res) => {
  res.send("Hello World");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

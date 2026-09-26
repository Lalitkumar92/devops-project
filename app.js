const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    project: "DevOps Project",
    developer: "Lalit Kumar Nayak",
    status: "Running",
    environment: "Docker + GitHub Actions"
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

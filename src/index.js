const app = require("express");

app.get("/", (req, res) =>
  res.json({ response: "Exposed Express API Endpoint" })
);

const port = 8080;

app.listen(port, () =>
  console.log(`app listening on http://localhost:${port}`)
);

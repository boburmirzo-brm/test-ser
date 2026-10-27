const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server ishlayapti!");
});

app.get("/health", (req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

app.get("/hello/:name", (req, res) => {
  res.json({ message: `Salom, ${req.params.name}!` });
});

app.post("/echo", (req, res) => {
  res.json({ received: req.body });
});

app.use((req, res) => {
  res.status(404).json({ error: "Topilmadi" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server ${PORT}-portda ishga tushdi`);
});

import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("You are at root");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "joke 1",
      description: "This is joke 1",
    },
    {
      id: 2,
      title: "joke 2",
      description: "This is joke 2",
    },
    {
      id: 3,
      title: "joke 3",
      description: "This is joke 3",
    },
    {
      id: 4,
      title: "joke 4",
      description: "This is joke 4",
    },
    {
      id: 5,
      title: "joke 5",
      description: "This is joke 5",
    },
    {
      id: 6,
      title: "joke 6",
      description: "This is joke 6",
    },
  ];

  res.send(jokes);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});

const express = require("express")

const app = express()

const PORT = 3000

const friends = [
  {
    id: 0,
    name: "Asmit",
  },
  {
    id: 1,
    name: "Awadh",
  },
  {
    id: 2,
    name: "Devraj",
  },
  {
    id: 3,
    name: "Vibhanshu",
  },
]

app.get("/friends", (req, res) => {
  res.json(friends)
})

app.get("/friends/:friendId", (req, res) => {
  const friendId = Number(req.params.friendId)
  const friend = friends[friendId]
  if (friend) {
    res.json(friend)
  } else {
    res.status(404).json({
      error: "Friend does not exists !",
    })
  }
})

app.get("/", (req, res) => {
  res.send("Hellooo")
})

app.get("/messages", (req, res) => {
  res.send("<ul><li>Hello Asmit</li><ul>")
})

app.post("/messages", (req, res) => {
  console.log("Updating messages ....")
})

app.listen(PORT, () => {
  console.log(`Listening on ${PORT} ...`)
})

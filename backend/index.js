const { response } = require("express")
const express = require("express")
const app = express()

app.get("/", function(request, response) {
  return response.json({
    message: "Hello World"
  })
})

app.listen(3333)
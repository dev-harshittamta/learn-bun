import figlet from "figlet";
import express from "express";

const app = express()
const port = 3000;

app.get('/:text', (req, res) => {
  const text = req.params.text

  figlet(text, (err, data) => {
    if (err) {
      console.error(err)
      res.status(500).send('Internal Server Error')
      return
    }

    res.send(`<pre>${data}</pre>`)
  })
})

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}...`)
})


import express from 'npm:express'
import cors from 'npm:cors'

const app = express()

app.use(cors())

app.get('/:id', async (req, res) => {
  try {
    const check = await fetch('https://' + req.url.substring(1) + '/keys')
    res.send(await check.text())
  } catch (err) {}
})

app.listen(8888)


const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.get('/store/:id', (req, res) => {
    const actualPage = '/product'
    const queryParams = { id: req.params.id }
    app.render(req, res, actualPage, queryParams)
  })
  server.get('/about/:id', (req, res) => {
    const actualPage = '/about2'
    const queryParams = { id: req.params.id }
    app.render(req, res, actualPage, queryParams)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(6000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:6000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})

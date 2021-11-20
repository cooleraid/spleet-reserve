require('dotenv').config()
const { ValidationError } = require('express-validation')
const routes = require('./src/routes')
const express = require('express')
const app = express()
const morgan = require("morgan")
const cors = require('cors')

app.use(morgan(function (tokens, req, res) {
  req.body = req.body || {}
  const { pin, password, ...data } = req.body
  return [
    `[${new Date().toISOString()}]`,
    `${req.ip}`,
    `${req.method}`,
    `${req.originalUrl}`,
    `${res.statusCode}`,
    `${res.statusMessage}`,
    `${JSON.stringify(data)}`,
    `${req.headers['user-agent']}`,
    `${res.get('Content-Length') || 0}b sent`, '-',
    `${tokens['response-time'](req, res)}ms`
  ].join(' ')
}))

app.use(cors({ origin: '*' }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', routes)
app.get("/health", (_, res) => res.sendStatus(200))
app.use((req, res) => res.status(404).send({ status: "error", message: "Not Found" }))
app.use((err, req, res, next) => {
  if (err instanceof ValidationError && err.details?.body?.length) return res.status(err.statusCode).json({ status: "error", message: err.details.body[0].message.replace(/["]+/g, '') })
  if (err instanceof ValidationError && err.details?.query?.length) return res.status(err.statusCode).json({ status: "error", message: err.details.query[0].message.replace(/["]+/g, '') })
  if (err instanceof ValidationError && err.details?.params?.length) return res.status(err.statusCode).json({ status: "error", message: err.details.params[0].message.replace(/["]+/g, '') })
  console.error(err)
  res.status(500).json({ status: "error", message: "An error was encountered" })
})
app.listen(process.env.PORT, () => console.log(`PORT: ${process.env.PORT}`))
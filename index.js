let express = require('express')
let app = express()
let bodyParser = require('body-parser')

// These two following lines ensures that every incomming request
// is parsed to json automatically
app.use(bodyParser.urlencoded({ extended: 'true' }))
app.use(bodyParser.json())

// Allow access to resources from any origin and any headers. As we want
// the agent to reach the webhook and not bother with CORS, they are fully
// permissive
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

/***** NEW *****/
// Handle POST http requests on the /webhook endpoint
app.post('/webhook', webhook)

const webhook = (req, res) => {
  let body = req.body

  // Retrieving parameters from the request made by the agent
  let action = body.result.action
  let parameters = body.result.parameters

  // Performing the action
  response.fulfillmentText="helo"
  response.source="webhook"
  

  // Sending back the results to the agent
  res.json(response)
}

module.exports = webhook
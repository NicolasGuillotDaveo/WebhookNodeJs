let express = require('express')
let app = express()
let bodyParser = require('body-parser')

// These two following lines ensures that every incomming request
// is parsed to json automatically

// Allow access to resources from any origin and any headers. As we want
// the agent to reach the webhook and not bother with CORS, they are fully
// permissive


/***** NEW *****/
// Handle POST http requests on the /webhook endpoint


const webhook = (req, res) => {
  let body = req.body

  // Retrieving parameters from the request made by the agent
  let action = body.result.action
  let parameters = body.result.parameters

  // Performing the action
  let response={
fulfillmentText:"helo",
source:"webhook"

  };
  
  // Sending back the results to the agent
  res.json(response)
}
app.post('/webhook', webhook)
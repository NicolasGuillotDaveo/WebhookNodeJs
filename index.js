
const webhook = (req, res) => {
  let body = req.body

  // Retrieving parameters from the request made by the agent
  let action = body.result.action
  let parameters = body.result.parameters

  // Performing the action
  response.fulfillmentText="helo";
  response.source="webhook";
  

  // Sending back the results to the agent
  res.json(response)
}

module.exports = webhook
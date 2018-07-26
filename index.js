app.post('/webhook',function (req, res){
console.log('Received a post request');
if(!req.body) return res.sendStatus(400)
res.setHeader('Content-Type','application/json');
console.log('here is the post request from dialogflow');
console.log(req.body);

let response= " ";
let responseObj={
  "fulfillmentText":response,
  "source":"webhook node"}
  return res.json(responseObj);

})
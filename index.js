"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.use(bodyParser.json());

restService.post( function(req, res) {
  var speech =
    req.body.queryResult &&
    req.body.queryResult.fulfillmentText
      ? req.body.queryResult.fulfillmentText
      : "Seems like some problem. Speak again.";
  return res.json({
    fulfillmentText: speech,
    source: "webhook-echo-sample"
  });
});
 



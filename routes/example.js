//Contains example endpoints
//Routes are seperated so different policies and security can be applied.

var express = require('express');
var router = express.Router();
var cx = require('../integrations/cx/connect.js');
var mysqldb = require('../integrations/sqldb/connect.js');
var litmos = require('../integrations/litmos/connect.js');
const logger = require('../logs/logsetup.js');
var errors = require('../errors/dictionary.js');
var timetools = require('../tools/timetools.jsx');

router.get('/Static', async function(req,res,next){

  //localhost:3000/example/static should return the following

  console.log('GET: /Static');

  res.status(200).json({version:'0.0.1', project:'pdc dashboard' })

});

router.post('/Static', async function(req,res,next){

  console.log('POST: /Static');
  console.log(req.body);

  let responseObj = {
    version:'0.0.1',
    project:'pdc dashboard',
    requestbody: req.body
  };

  res.status(200).json(responseObj);
 
  return

});

router.get('/RetrieveNHAssets', async function(req,res,next){

  /*
  This is an example of a simple GET route that will return data from the CX database to the client asking for it.
  There are many ways to accomplish what this is doing, and you can do a lot more than just return information if you need to.
  */

  let hash = logger.getHash('RetrieveAssets'); //This exists for setting up logs that allow us to track a request from start to finish

  logger.trace('Request to Retrieve Assets Hit', hash); //Used instead of console to push the logs to graylog

  let responseObj = {}; //The object we will be writing to that gets sent back to the client

  let tokenRequest = await cx.login({Location:3}); //Retrieve an API token from the correct location

  if(tokenRequest.didError){

    //What do if error logging in
    //I have to come up with an easy error handler that is universal. Once I do it will be implemented here.
  };

  const TOKEN = tokenRequest.response; //Gets the token from the request.

  let assetQueryString = `Assets?embeds=UserDefinedValues&filters=AssetTypeID,eq,18;IsActive,eq,true`; //I break the API query string out to make the next portion more readable

/*
  Takes an object {ENDPOINT:"STR", TOKEN:TOKEN, METHOD:"GET || POST", DATA:"Optional JSON"}
  Returns object {didError:boolean, response:JSON, status:int}
*/

  let cxAssetsQuery = await cx.fetch({ENDPOINT:assetQueryString, TOKEN:TOKEN, METHOD:'GET'});

  if(cxAssetsQuery.didError){

    //Handle error with getting assets back
    //Will eventually implement new error handling
  }

  let cxAssets = cxAssetsQuery.response; //Extract the JSON from the response object

  //This is optional processing space. You may not decide to do that.
  //But I wrote the front end to accept a specific format so I just make that format here.

  let returnedAssets = cxAssets.map(e=>{return{
    Name:e.AssetTag,
    ID:e.AssetID
  }});

  responseObj.Assets = returnedAssets; //Adds the key Assets to responseObj and assigns it the array created above.

  //Same idea, request specific data

  let userQueryString = `Users?filters=IsSalesRepresentative,eq,true`;

  let cxUserQuery = await cx.fetch({ENDPOINT:userQueryString, TOKEN:TOKEN, METHOD:'GET'});


  if(cxUserQuery.didError){

    //Handle error with getting users back

  }

  let cxUsers = cxUserQuery.response;

  //We need to alter each asset for the droplist

  let returnedUsers = cxUsers.map(e=>{return{
    Name:e.Username,
    ID:e.UserID
  }});

  responseObj.PDCs = returnedUsers;

  //logout
  await cx.logout({TOKEN:TOKEN})

  logger.trace('Request for Assets Complete',hash); //We log here to show the request completed

  res.status(200).json(responseObj) //Sends a success and the JSON back to the client

});


module.exports = router;
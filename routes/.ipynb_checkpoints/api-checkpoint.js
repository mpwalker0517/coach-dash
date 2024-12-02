var express = require('express');
var router = express.Router();
var cx = require('../integrations/cx/connect.js');
const logger = require('../logs/logsetup.js');
var errors = require('../errors/dictionary.js');


router.get('/employees-in-training', async function(req,res,next){

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
  
    let employeeQueryString = `Tenants?embeds=UserDefinedValues`; //I break the API query string out to make the next portion more readable
  
  /*
    Takes an object {ENDPOINT:"STR", TOKEN:TOKEN, METHOD:"GET || POST", DATA:"Optional JSON"}
    Returns object {didError:boolean, response:JSON, status:int}
  */
  
    let employeeQuery = await cx.fetch({ENDPOINT:employeeQueryString, TOKEN:TOKEN, METHOD:'GET'});
  
    if(employeeQuery.didError){
  
      //Handle error with getting assets back
      //Will eventually implement new error handling
    }
  
    let cxEmployees = employeeQuery.response; //Extract the JSON from the response object
  
    //This is optional processing space. You may not decide to do that.
    //But I wrote the front end to accept a specific format so I just make that format here.
  
    //let returnedAssets = cxEmployees.map(e=>{return{
     // Name:e.AssetTag,
      //ID:e.AssetID
   // }});
  
    responseObj.employees = cxEmployees; //Adds the key Assets to responseObj and assigns it the array created above.
  
    //Same idea, request specific data

  
    //logout
    await cx.logout({TOKEN:TOKEN})
  
    logger.trace('Request for Assets Complete',hash); //We log here to show the request completed
  
    res.status(200).json(responseObj) //Sends a success and the JSON back to the client
  
});
  

module.exports = router;
const axios = require('axios');

//Contains code for interacting with customer accounts.

async function login(p){

    let responseObj = {
        didError: false
    };

    const {Location=1} = p;
    let DBID = process.env.CX_DATABASE;
    let Username = process.env.CX_USERNAME;
    let Password = process.env.CX_PASSWORD;

    let url = `https://${DBID}.api.rentmanager.com/Authentication/AuthorizeUser`;

    let requestObj = {
        method: 'POST',
        url: url,
        data: {Username:Username,Password:Password,LocationID:Location},
        headers: [{'Content-Type':'application/json'}]
    };

    let fetchResponse; //Set here so we can access results outside of try catch

    try{

        fetchResponse = await axios(requestObj);
        
        responseObj.status = fetchResponse.status;

        responseObj.response = fetchResponse.data;

    }catch(e){

        console.log(e)

        responseObj.didError = true;

        responseObj.response = e.response;

        responseObj.status = e.response.status;

    };


    return responseObj


};

async function fetch(p){

    const{ENDPOINT, TOKEN,METHOD,DATA={},DBID='lcs-cx'} = p

    let responseObj = {
        didError: false
    };

    let url = `https://${DBID}.api.rentmanager.com/${ENDPOINT}`;

    let requestObj = {
        method: METHOD,
        url: url,
        data: DATA,
        headers: {'Content-type':'application/json; charset=utf-8','X-RM12Api-ApiToken': TOKEN}
    };

    let fetchResponse; //Set here so we can access results outside of try catch

    try{
        
        fetchResponse = await axios(requestObj);

    }catch(e){
        
        console.log(e)
        
        responseObj.didError = true;
        
        responseObj.response = e.response;

        responseObj.status = e.response.status;

        return responseObj
    }

    responseObj.response = fetchResponse.data;

    responseObj.status = fetchResponse.status;

    return responseObj

};

async function logout(p){

    let responseObj = {
        didError: false
    };

    const {TOKEN,DBID='lcs-cx'} = p;

    let url = `https://${DBID}.api.rentmanager.com/Authentication/DeAuthorize?token=${TOKEN}`;

    let requestObj = {
        method: 'POST',
        url: url,
        data: TOKEN,
        headers: {'Content-Type':'application/json','X-RM12Api-ApiToken': TOKEN}
    };

    let fetchResponse; //Set here so we can access results outside of try catch

    try{
        fetchResponse = await axios(requestObj);
    }catch(e){
        console.log(e)
    };

    responseObj.response = fetchResponse.data;

    return responseObj


};

module.exports.login = login;
module.exports.fetch = fetch;
module.exports.logout = logout;
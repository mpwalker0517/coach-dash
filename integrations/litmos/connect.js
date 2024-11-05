/*
    I am so sorry for this code. Litmos communication is a mess. Things that should error dont and things that error should. You are going to also
    find basically the same function twice for dealing with xml vs JSON because of how litmos handles certain requests differently.
    We will have to clean this up in the future
*/
const XMLHttpRequest = require('xhr2'); //We have to use this package here because its more tolerant of LITMOS API.

async function fetch(p,options={}){

    

    //I am sorry this function is a mess. Litmos is not reliable and I am having to deal with
    //Errors where it did work but gave back bad formated values and actual errors.
    //This could be due for a rewrite eventually.

    //IMPORTANT INFO: Litmos does not do things normally. You can get a successful post (200) and recieve no text back.
    //ALSO: Litmos is unreliable with response codes, take them with a grain of salt.

        const{endpoint,method} = p; //Destructure the passed properties obj

        //console.dir(data);

        // stringingfy the data. If invalid error and return from the function

        let stringifiedData;

        try{

            stringifiedData = JSON.stringify(data);

        }catch{

            let responseObj = {

            };

            responseObj.didError = true;
            responseObj.errorMessage = "Error in LITMOS fetch function. Hit catch in try catch."

            return responseObj

        };

        //Send the request

        let pulledValue = await pullStuff(method,endpoint,stringifiedData,options);

        //Code for what happens when we get response back


    return pulledValue



};

async function pullStuff(p){

    const {method,endpoint,stringifiedData='',options={}} = p;

    //work with some of the options that can be passed.

    let appendix = options.appendix != undefined ? options.appendix : '';

    let responseObj = {
        didError: false
    };

    return new Promise(function(resolve,reject){

        var xhr = new XMLHttpRequest();

        xhr.open(method,`https://api.litmos.com/v1.svc/${endpoint}?&source=RMUINTERNAL&format=json&limit=1000${appendix}`,true);
        xhr.setRequestHeader('Content-Type','application/json');
        xhr.setRequestHeader('apikey',process.env.LITMOSKEY);
        xhr.timeout = 5000;

        xhr.onload = function(){

            console.log(`xhr2 status was ${xhr.status}`);

            if(xhr.status == 200 || xhr.status == 204 || xhr.status == 201){

                try{

                    responseObj.response = JSON.parse(xhr.responseText);

                    responseObj.status = xhr.status;

                }catch{

                    responseObj.response = 'SUCCESS WITH NO RESPONSE TEXT'

                    responseObj.status = xhr.status;

                }


            }else{

                responseObj.didError = true;

                responseObj.response = xhr.responseText;

                responseObj.status = xhr.status;

            }

            resolve(responseObj);

        };

        xhr.onerror = function(e){
            console.log('Error hit');
            console.log(e);

            responseObj = {
                didError: true,
                errorMessage: e
            };

            resolve(responseObj);

        };

        xhr.ontimeout = function(){
            
            console.log('XHR TIMEOUT');

            responseObj = {
                didError: true,
                errorMessage: 'XHR Request Timed Out'
            };

            resolve(responseObj);

        };

        //Send the request

        xhr.send(method=='POST' || method=='PUT' ? stringifiedData : ''); //If post send data else dont.



    });
};

async function fetchLitmosXML(p){
    //Some endpoints in Litmos don't accept JSON, so we need to send them XML, this is annoying!

    const{endpoint,method,data} = p; //Destructure the passed properties obj

    let xmlifiedData;

    try{

        xmlifiedData = OBJtoXML(data);

    }catch{

        responseObj.didError = true;

        return responseObj

    };


    let pulledValue = await pullXMLStuff(method,endpoint,xmlifiedData);

    //Code for what happens when we get response back


    return pulledValue



};

async function pullXMLStuff(method,endpoint,stringifiedData){

    //This function is the same as above but handles sending xml

    let responseObj = {
        didError: false
    };

    return new Promise(function(resolve,reject){

        var xhr = new XMLHttpRequest();

        xhr.open(method,`https://api.litmos.com/v1.svc/${endpoint}?&source=RMUINTERNAL&format=json&limit=1000`,true);
        xhr.setRequestHeader('Content-Type','text/xml');
        xhr.setRequestHeader('apikey',process.env.LITMOSKEY);
        xhr.timeout = 5000;

        xhr.onload = function(){

            console.log(`xhr2 status was ${xhr.status}`);

            if(xhr.status == 200 || xhr.status == 204){

                responseObj.response = 'Worked But Litmos Returned No Data';
                
                responseObj.status = 200

            }else{

                responseObj.didError = true;

                responseObj.response = xhr.responseText;

            }

            resolve(responseObj);

        };

        xhr.onerror = function(e){
            console.log('Error hit');
            console.log(e);

            resolve(e);

        };

        xhr.ontimeout = function(){
            
            console.log('XHR TIMEOUT');

            resolve(42);

        };

        //Send the request

        xhr.send(method=='POST' ? stringifiedData : ''); //If post send data else dont.



    });
};

function OBJtoXML(obj) {
    var xml = '';
    for (var prop in obj) {
      xml += obj[prop] instanceof Array ? '' : "<" + prop + ">";
      if (obj[prop] instanceof Array) {
        for (var array in obj[prop]) {
          xml += "<" + prop + ">";
          xml += OBJtoXML(new Object(obj[prop][array]));
          xml += "</" + prop + ">";
        }
      } else if (typeof obj[prop] == "object") {
        xml += OBJtoXML(new Object(obj[prop]));
      } else {
        xml += obj[prop];
      }
      xml += obj[prop] instanceof Array ? '' : "</" + prop + ">";
    }
    var xml = xml.replace(/<\/?[0-9]{1,}>/g, '');
    return xml
}

module.exports.fetch = fetch;
module.exports.fetchLitmosXML = fetchLitmosXML;
module.exports.pullStuff = pullStuff;
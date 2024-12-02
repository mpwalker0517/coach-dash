//Contains all of the functions for connecting with the SQL database.

//This file contains the functions to connect to the rmtraining DB

var mysql = require('promise-mysql');


async function queryDB(str,vars=[]){

  let transactionResponse;

  let queryResponse;

  //Need to see if the record is select or not.

  try{

    let connection = await mysql.createConnection({

      // host: process.env.DATABASE_HOST,
      // user: process.env.DATABASE_USER,
      // password: process.env.DATABASE_PASSWORD,
      // database: process.env.DATABASE

      host: process.env.VC_APP_DB_HOST,
      user: process.env.VC_APP_DB_USER,
      password: process.env.VC_APP_DB_PW,
      database: process.env.VC_APP_DB_NAME,
      flags: 'FOUND_ROWS'


    });

    queryResponse = await connection.query(str,vars);

    //console.log(queryResponse);

    //Fixes the weird formattng of the JSON return so we can properly pass it up

    queryResponse = JSON.stringify(queryResponse);

    queryResponse = JSON.parse(queryResponse);


    connection.end();

    transactionResponse = {error: false, queryResponse: queryResponse, effectedRows: queryResponse.length};


  }catch(e){

    transactionResponse = {error: true, queryResponse: queryResponse, friendlyMsg:'Error in queryDB caused catch to fire'};

    console.log(e);

    //logger.error(transactionResponse);

  }

    //console.log(queryResponse);

    return transactionResponse

};

//We might remove this if we dont need it
async function multiTableQuery(ar){

  //Specify an array of queries, runs them and returns the tables as named

  let outputObj = {error:false};

  for (o in ar){

    let tableName = ar[o].tableName == undefined ? `table_${o}` : ar[o].tableName;

    let queryString = ar[o].queryString;

    let queryResponse;

    try{

      queryResponse = await queryDB(queryString);

    }catch{

      queryResponse = {error: true, queryResponse: queryResponse};

    };

    if(queryResponse.error){outputObj.error=true}; //Checking if error on each return

    outputObj[tableName] = queryResponse.queryResponse;

  };

  return outputObj;

};

//Allows to query CertDB. Code is basically same as queryDB.
//I made it seperate for ease of understaning in files that use this function

async function queryCertDB(str,vars=[]){

  let transactionResponse;

  let queryResponse;

  //Need to see if the record is select or not.

  try{

    let connection = await mysql.createConnection({

      // host: process.env.DATABASE_HOST,
      // user: process.env.DATABASE_USER,
      // password: process.env.DATABASE_PASSWORD,
      // database: process.env.DATABASE

      host: 'rm-db01.rentmanager.dev',
      user: 'root',
      password: '1010as',
      database: 'vc_registrations',
      flags: 'FOUND_ROWS'


    });

    queryResponse = await connection.query(str,vars);

    //console.log(queryResponse);

    //Fixes the weird formattng of the JSON return so we can properly pass it up

    queryResponse = JSON.stringify(queryResponse);

    queryResponse = JSON.parse(queryResponse);


    connection.end();

    transactionResponse = {error: false, queryResponse: queryResponse, effectedRows: queryResponse.length};


  }catch(e){

    transactionResponse = {error: true, queryResponse: queryResponse, friendlyMsg:'Error in queryDB caused catch to fire'};

    console.log(e);

    //logger.error(transactionResponse);

  }

    //console.log(queryResponse);

  return transactionResponse

};


module.exports.queryDB = queryDB;
module.exports.queryCertDB = queryCertDB;

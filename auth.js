//This file contains the middleware that checks the request
//for the secret token each time its used. 


const middlewareFunction = async function (req, res, next) {
    
    let isAuth = true;
    
    logger.debug('We are in middleware');

    if(isAuth){

        next();

    }else{

        logger.debug('User not auth. See middleware');

        res.send(401);

    }
  };
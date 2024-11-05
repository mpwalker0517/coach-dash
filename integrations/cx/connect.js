//Contains code to lookup http error info based on status
//Returns some basic info that can be passed on

function ErrorInfo(code){

    let Type;
    let Text;
    let FriendlyText = '';

    switch(code){

        case 204:{

            Type = `No Content`

            Text = `Request succeeded but returned no data`

            break

        };

        case 400:{

            Type = `Bad Request`

            Text = `The server cannot or will not process the request due to something that is perceived to be a client error`

            break

        };

        case 401:{

            Type = `Unauthorized`

            Text = `You are not authorized to do so.`

            break

        };

        case 403:{

            Type = `Forbidden`

            Text = `You are not authorized to do so.`

            break

        };

        case 405:{

            Type = `Method Not Allowed`

            Text = `Resource does not allow method`

            break

        }

        case 408:{

            Type = `Request Timeout`

            Text = `No response from server.`

            break

        };

        case 409:{

            Type = `Conflict`

            Text = `This response is sent when a request conflicts with the current state of the server.`

            break

        };

        case 413:{


            Type = `Payload Too Large`

            Text = `Request entity is larger than server limits`

            break

        };

        case 418:{

            Type = `I'm a Teapot`

            Text = `The server refuses the attempt to brew coffee with a teapot.`

            break

        };

        case 429:{

            Type = `Too Many Requests`

            Text = `The user has sent too many requests in a given amount of time.`

            break   

        }

        case 500:{

            Type = `Internal Server Error`

            Text = `The server has encountered a situation it does not know how to handle.`

            break

        };

        case 501:{

            Type = `Not Implemented`

            Text = `The request method is not supported by the server and cannot be handled.`

            break

        };

        case 503:{

            Type = `Server Unavailable`

            Text = `The server is not ready to handle the request.`

            break

        }; 
        
        case 504:{

            Type = `Gateway Timeout`

            Text = `This error response is given when the server is acting as a gateway and cannot get a response in time.`

            break

        };  

        default:{

            Type = `Misc Error`

            Text = `Error Not In List. Tell Tobias to Add`

            break

        }

    }

    return {
        Type:Type,
        Text: `${Text}\n${FriendlyText}`
    }

}

module.exports.ErrorInfo = ErrorInfo;
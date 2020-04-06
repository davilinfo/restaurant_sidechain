const OysterEntrance = require ('../entrances/oyster_entrance');
const User = require ('../models/user');
const reader = require('fs');
var food_types = null;

module.exports = {
    async index(request, response){        
        food_types = {
            "food_type": [
                {
                    "food": "oysters",
                    "type": 1
                }
            ]
        };

        return response.json({
            status: "ok",
            result: await food_types
        })
    },

    async userRequest(request, response, userid) {
        /*to be developed*/
        return response.json({
            status: "ok",
            result: food_types
        })
    },

    async store(request, response){
        const { request_type, passphrase, userid, username, table } = request.body;        

        if (request_type === 1){                                    

            console.log("registering payment"); 
            const entrance = new OysterEntrance();           
            const result = await entrance.registerPayment(passphrase, table, request_type, userid);

            return response.json({
                status: "performing transaction",
                result: result
            });
        }else{
            return response.json({
                status: "invalid request type",
                result: null
            })
        }
    }
}
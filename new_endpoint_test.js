var carwings = require('carwings2');
require('dotenv').config();

 
var secrets = {
    email: process.env.API_USERNAME,
    password: process.env.API_PASSWORD
};
 
// Create an instance of the client...
var client = new carwings.Client();
 
// Login using a user's Carwings (i.e. Nissan Connect) credentials...
client.login(secrets.email, secrets.password, (err, vehicle) => {
    if (err) {
        console.error(err);
        
        return err;
    }
    
    //
    // Logging in returns information about the user's vehicle, including its VIN.
    //
    
    // Request status about the user's vehicle...
    client.requestStatus(vehicle.vin, (statusErr, statusResponse) => {
        if (statusErr) {
            console.error(statusErr);
            
            return statusErr;
        }
        
        //
        // The response contains (raw) properties related to the status of the vehicle (e.g. charging or not).
        //
        
        console.log(statusResponse);
    });
});
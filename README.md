# pileaf

Simple web app to streamline using the Nissan Connect service with the Nissan Leaf. 
Mainly used to start the climate control *when* the service works 
(service is free from Nissan, but not very reliable).

## Install

* Create a `.env` file using the provided template or by using the `npm run init` command.
* Run `npm install` to install all the dependencies.
* Start the app with `npm start`.
* Go to http://localhost:3000 (or the specified port) to access the app.

## TODOs

* Add a timeout to prevent infinite loop when the server does not answer.
* Hide/toggle/prettify the output logs that are sent client-side.
* Render server responses correctly client-side.
* Make the overall design not look like it was made by a programmer (even it was).
* Add "timed start of climate control", "start charging" and "end charging" functions.
* Support different makes/models.
* Save user config somewhere better than a .env file and allow multiple users/cars.
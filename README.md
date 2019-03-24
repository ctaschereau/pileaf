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

* Render server responses correctly client-side.
* Make the overall design not look like it was made by a programmer (even it was).
* Support different makes/models.
* Save user config somewhere better than a .env file and allow multiple users/cars.
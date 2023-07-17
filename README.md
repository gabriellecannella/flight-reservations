# FlightReservation

Take home assesment 2023 - A tool in which users can search a flight Data base for available flight options by inputing an origin or destination.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# How to run

1. Clone or fork repository

2. Open folder in code editor

3) If first time running, type `npm install` in my-flightapp folder

3. run `npm start` in my-flightapp folder

4. cd into backend and run `npm run dev`

5. open to http://localhost:3000

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## BUGS to fix

search function currently will show results for anything where user input is included in the full name or origin.
ex: user inputs 'atl' and "Ronald Reagan Washington Natl" will appear due to 'ATL" at the end

## What is this repo?

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Further I configure the project to use :

* [Redux](https://redux.js.org/)
* [Redux-Sagas](https://redux-saga.js.org/)
* [Material-UI](https://material-ui.com/)

This bootstrap application with **Work in Progress**. This app will be in sync with the backend rails application from the [Rails-service](https://github.com/Prateek479/rails-service).


## To-do/In-progress

* Improving test converage
* Integrating Oauth2 Authentications with rails serive.
* Better Implementations for injecting sagas.
* Improving Documentations :D 


## Folder Structure:

```

├── README.md
├── node_modules
├── package-lock.json
├── package.json
├── public
├── src/
    ├── Actions
    │   └── userActions.js
    ├── App.js
    ├── App.test.js
    ├── Components
    │   ├── About
    │   ├── Blog
    │   ├── Header
    │   ├── Home
    │   ├── Inputs
    │   ├── Login
    │   └── SignUp
    ├── Config
    │   └── index.js
    ├── Constants
    │   └── user_actions.js
    ├── Container
    │   └── Login.js
    ├── Reducers
    │   ├── index.js
    │   └── userReducer.js
    ├── Sagas
    │   └── userSagas.js
    ├── Selectors
    ├── Utils
    │   ├── apis.js
    │   └── request.js
    ├── index.js
    ├── reportWebVitals.js
    ├── setupTests.js
    ├── store.js
    └── theme.js
└── yarn.lock

```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Current Layouts:

### SignUp
![Signup](https://github.com/Prateek479/React-Redux-MaterialUI/blob/master/public/layouts/Screenshot%202020-11-16%20at%2014.19.06.png)
### LogIn
![Login](https://github.com/Prateek479/React-Redux-MaterialUI/blob/master/public/layouts/Screenshot%202020-11-16%20at%2014.19.22.png)
### Home
![home](https://github.com/Prateek479/React-Redux-MaterialUI/blob/master/public/layouts/Screenshot%202020-11-16%20at%2014.25.52.png)


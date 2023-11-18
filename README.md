# UserManagementSystem

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.2.

## Development server

- Make sure you have `node`, `npm`, `yarn` and `angular cli` installed
- Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
- Run `yarn server` for json-server to start. Now on port 3000 the json-server will act like our fake API.

## Static login credentials

- for admin use
    - usernamne: `admin`
    - password: `admin123`
    
- for user use
    - usernamne: `user`
    - password: `user123`

## To update

- We can create `layout` folder and replace it with the `view` as it will better if the user and admin have difrent views

- Create a form component and make it generate forms from json to all create all forms

- Also we can split the components folder to `macro` and `micro` to manage big component like formes and header from small components like buttons and badges

- Add request and responde interceptors to handle tokens and handle errors from API and redirect to 500 page
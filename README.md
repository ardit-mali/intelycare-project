# Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



The project that I built in connection with coding challenge that was given to me is the one below

 


On the home page, the search engine is displayed together with the data we added earlier.
In the search box we can search for the word we want and the search engine will show it to us if it is found in the database, on the contrary we go to create page create a new word or a group of words that we want to add to our search engine.

 
Or we can edit the group of words we created earlier by adding or removing words or deleting it completely.


 

As for the query part, we can search with 1 token and display all the lists where this token is used, we can search with 2 token and all the lists where these token are used are displayed or with 3 token and only that one list with all three required tokens will show up.

 

 

 
 

As for the database part, H2 is the database module used in this project and the in-memory database exists for the time the backend process is run. 

I have created only 1 table for the documents that have ID and CONTENT that store the data that we will add to the table.

 



Backend is with Java Spring Boot version 11
The modules used in the backend are spring boot-web which is for api and jpa which is for entity annotation.
Lombok -> is annotation for objects to remove unnecessary boilerplate code.
Entity-> which does mapping for the database table.
Repository-> is for the database.
Document Service -> for part of functions (update, edit, delete)
The frontend is in angular version 13.3
 

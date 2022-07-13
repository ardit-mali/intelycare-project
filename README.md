The project that I built in connection with coding challenge that was given to me is the one below:

On the home page, the search engine is displayed together with the data we added earlier.
In the search box we can search for the word we want and the search engine will show it to us if it is found in the database, on the contrary we go to create page create a new word or a group of words that we want to add to our search engine.

Or we can edit the group of words we created earlier by adding or removing words or deleting it completely.

As for the query part, we can search with 1 token and display all the lists where this token is used, we can search with 2 token and all the lists where these token are used are displayed or with 3 token and only that one list with all three required tokens will show up.

As for the database part, H2 is the database module used in this project and the in-memory database exists for the time the backend process is run. 
I have created only 1 table for the documents that have ID and CONTENT that store the data that we will add to the table.

Backend is with Java Spring Boot version 11
The modules used in the backend are spring boot-web which is for API and JPA which is for entity annotation.
Lombok -> is annotation for objects to remove unnecessary boilerplate code.
Entity-> which does mapping for the database table.
Repository-> is for the database.
Document Service -> for part of functions (update, edit, delete).
The frontend is in Angular CLI version 13.3.7.
 

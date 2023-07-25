## Note Taker App

## Description
The Note Taker is an application that allows users to write, save, and manage notes. The application utilizes an Express.js back end to handle data storage and retrieval, using a JSON file to store the notes. The front-end of the application has already been developed, and it's your task to build the back end, integrate it with the front end, and deploy the entire application to Heroku.

The application provides a simple and intuitive user interface, making it easy for users to create, save, view, and delete notes as needed. With this app, users can organize their thoughts and keep track of tasks efficiently.

## Features
Create new notes by providing a title and content.
Save notes to the server, which will be stored in a JSON file.
View a list of all saved notes.
View the content of a specific note.
Delete notes that are no longer needed.
Technologies Used
Express.js: For building the server and handling routes.
JSON: To store and retrieve note data.
Heroku: For deploying the application.

## Installation and Setup
Clone the repository to your local machine:
bash
Copy code
git clone https://github.com/your-username/note-taker-app.git
Navigate to the project directory:
bash
Copy code
cd note-taker-app
Install the required dependencies:
Copy code
npm install

## Usage
Start the application:
sql
Copy code
npm start
Open your web browser and go to http://localhost:3000 to access the Note Taker app.

You will land on the home page with a link to the notes page.

Click on the "Notes" link to navigate to the Notes page.

On the Notes page, the left-hand column displays existing notes (if any), and the right-hand column provides fields to enter a new note's title and content.

To create a new note, enter the title and content in the right-hand column and click on the "Save" icon in the top navigation bar.

The newly created note will be saved and appear in the left-hand column with other existing notes.

To view the content of an existing note, click on its title in the left-hand column. The note's details will be displayed in the right-hand column.

To delete a note, click on the "Delete" icon next to the note in the left-hand column.

## Deployment
To deploy the entire application to Heroku, follow these steps:

Set up a Heroku account and create a new app.

Install the Heroku CLI and log in to your Heroku account.

Add a Procfile to the project root with the following content:

makefile
Copy code
web: node server.js
Commit your changes and push the project to Heroku:
sql
Copy code
git add .
git commit -m "Heroku deployment"
git push heroku main
The application will be deployed to Heroku, and you can access it using the provided Heroku app URL.
Contributing
Contributions to the Note Taker app are welcome. If you have any bug fixes, enhancements, or new features to propose, please follow these steps:

Fork the repository.

Create a new branch for your changes:

bash
Copy code
git checkout -b feature/your-feature-name
Commit your changes and push them to your forked repository:
bash
Copy code
git commit -m "Add your commit message"
git push origin feature/your-feature-name
Create a pull request on the main repository, explaining your changes and why they should be merged.

## License
This project is licensed under the MIT License.

Contact
If you have any questions or feedback regarding the Note Taker app, please feel free to reach out to us at your-email@example.com.





# Tracker-SQL

## Description
Tracker-SQL is a command-line application designed to help business owners manage employee data, including departments, roles, and employee details. Built using Node.js, Inquirer, and PostgreSQL, this application allows for easy interaction with a company's employee database, enabling users to view, add, and update information seamlessly.

## Table of Contents
Technologies Used
Features
Installation
Usage
Database Schema
Future Enhancements
License

## Technologies Used
Node.js: JavaScript runtime for server-side programming.
Inquirer: User-friendly command-line interface for prompting user input.
PostgreSQL: Relational database management system for storing employee data.
pg: PostgreSQL client for Node.js to handle database interactions.
Features
View all departments, roles, and employees in formatted tables.
Add new departments, roles, and employees to the database.
Update existing employee roles.
The user-friendly command-line interface provides an intuitive navigation experience.
Installation
To set up the project locally, follow these steps:

Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/tracker-sql.git
Navigate into the project directory:

bash
Copy code
cd tracker-sql
Install the required dependencies:

bash
Copy code
npm install inquirer@8.2.4 pg
Set up your PostgreSQL database. Create a database and run the provided seeds.sql file to populate it with initial data.

Update the database connection credentials in your code to match your local setup.

## Usage
Start the application:

bash
Copy code
node index.js
Follow the prompts in the command line to navigate through the options, such as viewing departments, roles, employees, and adding new entries.

For a detailed demonstration of functionality, refer to the walkthrough video.

Database Schema
The application is structured around the following database schema:

## Department

id: SERIAL PRIMARY KEY
name: VARCHAR(30) UNIQUE NOT NULL
Role

id: SERIAL PRIMARY KEY
title: VARCHAR(30) UNIQUE NOT NULL
salary: DECIMAL NOT NULL
department_id: INTEGER NOT NULL
Employee

id: SERIAL PRIMARY KEY
first_name: VARCHAR(30) NOT NULL
last_name: VARCHAR(30) NOT NULL
role_id: INTEGER NOT NULL
manager_id: INTEGER (nullable)
Future Enhancements
Potential future features could include:

Updating employee managers.
Viewing employees by manager or department.
Deleting departments, roles, and employees.
Viewing the total utilized budget of a department.
License
This project is licensed under the MIT License. Feel free to modify and distribute as needed.



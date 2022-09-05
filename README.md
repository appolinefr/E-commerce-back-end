# E-commerce-back-end

## Table of content

- [Description of Project](#description-of-project)
- [Project Requirements](#project-requirements)
- [What I have learned](#what-i-have-learned)
- [Challenges](#challenges)
- [Installation](#installation-💾)
- [Screenshot of Application](#screenshot-of-application)
- [Link to walkthrough video](#link-to-walkthrough-video)

## Description of Project

This challenge was to build the back end for an e-commerce site using Express.js API and configure it to use Sequelize to interact with a MySQL database.

## Project Requirements

Here are the main requirements of the project:

- When I add my database name, MySQL username, and MySQL password to an environment variable file then I am able to connect to a database using Sequelize
- When I enter schema and seed commands a development database is created and is seeded with test data
- When  I enter the command to invoke the application my server is started and the Sequelize models are synced to the MySQL database
- When I open API GET routes in Insomnia Core for categories, products, or tags the data for each of these routes is displayed in a formatted JSON
- When I test API POST, PUT, and DELETE routes in Insomnia Core I am able to successfully create, update, and delete data in my database

## What I have learned

It has been great learning about ORM and I am now comfortable using sequelize. I am looking forward to implementing the many features I have learned including password hashing and validation. 
This project was the opportunity to implement async functions and I was able to right cleaner code with async/wait and the try/catch statement. 

## Challenges

Learning sequelize has definitely been a learning curve but with practice and the help of the documentation I was able to implement it successfully for this challenge.

## Installation 💾

Run the following command:

- npm i
- mysql -u root -p
- Enter PW when promted
- source db/schema.sql
- quit
- npm run seed
- npm start

[Video Walkthrough of installation](https://drive.google.com/file/d/1QGcpd8oxk5WVz3PH9NykSBTTU0ERNM16/view)

### Screenshot of CLI

![Screenshot of Application](/image/e-commerce-back-end.png)

### Link to walkthrough video

[Link to walkthrough video](https://drive.google.com/file/d/154t9ZmRYLNOIyuCLnaKOmYoGest0M9ar/view)

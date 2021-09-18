# Backend using GraphQL

## TEAM
- Sundar
- Sreyas
- Umesh
- Awais

## INTRODUCTION
This is a complete web-dev project with a fully functioning backend and frontend. For setting up this project 

1. Create the database
2. Setup the backend
3. Setup the frontend
4. Run backend
5. Run frontend
6. Go to localhost:3000 in your favourite browser

### Getting Started

- Clone the repo using the following command:

    `git clone https://github.com/sundar-gopal/Backend-graphql.git`

- Install the dependencies:

    `npm install`

<br>

## Setting up the database:

### Using script :

- Go to `Databases` folder in the project

    `cd Databases`
- Open `CreateDatabase.sh` in your favourite editor
- Change the **File_path** variable to the path of the cloned ` Backend-graphql
` repository in your system and save the file
````sh
#!/bin/bash

File_path='' #ADD THE PATH TO THE CLONED Backend-graphql REPOSITORY
`````
- Give execution permission to the edited file

    `chmod +x CreateDatabase.sh`

- Run the script file

    `./CreateDatabase.sh`

- Follow along the execution.

>NOTE
>The password asked at different points of execution is your Mysql server password

### Alternate setup :

Alternatively you can source each of the `.sql` files to your sql local server
Follow the steps given below in the same order

- Run your sql server

    `/usr/local/mysql/bin/mysql -u root -p`
- Source each of the `.sql` file in the `Databases` folder sequencially. Follow the commands sequencially :

    `source <path of HRMIS.sql file>`

    `source <path of salaries.sql file>`

    `source <path of leaves.sql file>`

    `source <path of attendance.sql file>`

## Setting up backend

- Open terminal in the cloned repository
- Setup required packages
	
  `npm install`
- start the backend using nodemon

    `nodemon`
    
> By default backend server runs on localhost:4000

## Setting up the frontend
- move to `Frontend` folder and install dependencies
	
    `cd Frontend`
    
	`yarn install`
- Start the frontend

    `yarn start`

> By default the frontend runs on localhost:3000

## Quick login
> Email : dwight@yara.com
> 
> Password : Dwight
>
> Role : Admin

## Troubleshooting

- Unable to access database
	- Check if the mysql connector file has the same password as your local mysql server password

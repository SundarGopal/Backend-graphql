# Backend using GraphQL

## TEAM
- Sundar
- Sreyas
- Umesh
- Awais

### Instructions

- Clone the repo using the following command:

`git clone https://github.com/sundar-gopal/Backend-graphql.git`

-Install the dependencies:
    `npm install`

<br>

## Setting up the database:

### USING SCRIPT

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

### ALTERNATE  SETUP

Alternatively you can source each of the `.sql` files to your sql local server
Follow the steps given below in the same order

- Run your sql server
`/usr/local/mysql/bin/mysql -u root -p`
- Source each of the `.sql` file in the `Databases` folder sequencially. Follow the commands sequencially :
`source <path of HRMIS.sql file>`
`source <path of salaries.sql file>`
`source <path of leaves.sql file>`
`source <path of attendance.sql file>`
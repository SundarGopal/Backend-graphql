#!/bin/bash

File_path='/Users/<Your Username>/<location to cloned repo>' #ADD THE PATH TO THE CLONED REPOSITORY

echo "Creating database HRMIS and creating table employee"
echo "Enter Mysql password"
/usr/local/mysql/bin/mysql -u root -p < $File_path/Backend-graphql/Databases/HRMIS.sql

echo "Adding salaries table to HRMIS"
echo "Enter Mysql password"
/usr/local/mysql/bin/mysql -u root -p < $File_path/Backend-graphql/Databases/salaries.sql

echo "Adding leaves table to HRMIS"
echo "Enter Mysql password"
/usr/local/mysql/bin/mysql -u root -p < $File_path/Backend-graphql/Databases/leaves.sql

echo "Adding attendance table to HRMIS"
echo "Enter Mysql password"
/usr/local/mysql/bin/mysql -u root -p < $File_path/Backend-graphql/Databases/attendance.sql

echo "Completed the database setup"
echo ""
echo "You can verify the same in your mysql server!!"

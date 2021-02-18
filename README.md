# Expense Tracker

Powered by:

- React
- CSS
- SASS
- Node.js
- Express
- MongoDB

## Installation

Install the dependencies and devDependencies and start the server.

##### Backend

1 - You have to create a database in MongoDB Atlas

2 - You have to go to one of your Clusters and click in the button "Collection"

3 - Click in the button Create Database and write the name "expensetracker"

4 - Go to one of your Clusters and click in the button "Connect", 

you have to select the option "Connect your application" 

then you have to copy the code of the option two, change it

put your password and the name of the collection "expensetracker"

5 - Create a a file called config.env in the carpet config === ./expense-tracker-api/config/config.env

6 - There you have to put your MONGO_URI (the code from step 4)

```sh
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb+srv://user:............
```
then...
```sh
cd expense-tracker-api 
npm i
npm run server
```

##### Frontend
write this on your terminal...
```sh
cd expense-tracker-react 
npm i
npm run start
```
